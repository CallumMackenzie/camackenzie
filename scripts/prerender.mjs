import http from "node:http";
import { readFile, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const buildDirectory = join(projectRoot, "build");
const indexPath = join(buildDirectory, "index.html");
const viewport = { width: 1024, height: 768, deviceScaleFactor: 1 };

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

const server = http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url ?? "/", "http://127.0.0.1").pathname,
    );

    // Firebase Hosting injects these reserved scripts in production. They are
    // not needed to render the portfolio snapshot locally.
    if (pathname.startsWith("/__/firebase/")) {
      response.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8" });
      response.end("");
      return;
    }

    const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
    let requestedPath = resolve(buildDirectory, relativePath);
    if (requestedPath !== buildDirectory && !requestedPath.startsWith(`${buildDirectory}${sep}`)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const requestedStat = await stat(requestedPath);
    if (requestedStat.isDirectory()) requestedPath = join(requestedPath, "index.html");
    const body = await readFile(requestedPath);
    response.writeHead(200, {
      "Content-Type": contentTypes.get(extname(requestedPath).toLowerCase()) ?? "application/octet-stream",
    });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});

await new Promise((resolveServer, rejectServer) => {
  server.once("error", rejectServer);
  server.listen(0, "127.0.0.1", resolveServer);
});

const address = server.address();
if (!address || typeof address === "string") throw new Error("Could not start prerender server");
const url = `http://127.0.0.1:${address.port}/`;

let browser;
try {
  browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport(viewport);
  await page.evaluateOnNewDocument(() => {
    window.__PRERENDERING__ = true;
  });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60_000 });
  await page.waitForSelector("#root .projects-container", { timeout: 30_000 });

  const rootHtml = await page.$eval("#root", (root) => root.innerHTML);
  if (!rootHtml.includes("Callum Mackenzie") || !rootHtml.includes("Projects")) {
    throw new Error("The rendered snapshot is missing expected portfolio content");
  }

  const originalHtml = await readFile(indexPath, "utf8");
  const emptyRoot = /<div id="root"><\/div>/;
  if (!emptyRoot.test(originalHtml)) {
    throw new Error("Could not find the empty React root in build/index.html");
  }

  const prerenderedHtml = originalHtml.replace(
    emptyRoot,
    `<div id="root" data-prerendered="true">${rootHtml}</div>`,
  );
  await writeFile(indexPath, prerenderedHtml, "utf8");

  const parsedPage = await browser.newPage();
  await parsedPage.setJavaScriptEnabled(false);
  await parsedPage.goto(url, { waitUntil: "networkidle0", timeout: 60_000 });
  const reparsedRootHtml = await parsedPage.$eval("#root", (root) => root.innerHTML);
  if (rootHtml !== reparsedRootHtml) {
    let differenceIndex = 0;
    const comparisonLength = Math.min(rootHtml.length, reparsedRootHtml.length);
    while (
      differenceIndex < comparisonLength
      && rootHtml[differenceIndex] === reparsedRootHtml[differenceIndex]
    ) {
      differenceIndex += 1;
    }
    const contextStart = Math.max(0, differenceIndex - 180);
    const contextEnd = differenceIndex + 260;
    throw new Error(
      `The prerendered HTML changes when parsed near character ${differenceIndex}.\n`
      + `Rendered: ${rootHtml.slice(contextStart, contextEnd)}\n`
      + `Reparsed: ${reparsedRootHtml.slice(contextStart, contextEnd)}`,
    );
  }

  let textLength = 0;
  for (const clientViewport of [viewport, { width: 390, height: 844, deviceScaleFactor: 1 }]) {
    const runtimeErrors = [];
    const verificationPage = await browser.newPage();
    await verificationPage.setViewport(clientViewport);
    await verificationPage.evaluateOnNewDocument(() => {
      window.__PRERENDER_VALIDATION__ = true;
    });
    verificationPage.on("pageerror", (error) => runtimeErrors.push(error.message));
    verificationPage.on("console", (message) => {
      if (message.type() === "error") runtimeErrors.push(message.text());
    });
    await verificationPage.goto(url, { waitUntil: "networkidle0", timeout: 60_000 });
    await verificationPage.waitForSelector("#root .projects-container", { timeout: 30_000 });
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 250));

    if (runtimeErrors.length > 0) {
      throw new Error(
        `Client takeover validation failed at ${clientViewport.width}px:\n${runtimeErrors.join("\n")}`,
      );
    }

    if (clientViewport.width === viewport.width) {
      textLength = await verificationPage.$eval(
        "#root",
        (root) => root.textContent?.length ?? 0,
      );
    }
    await verificationPage.close();
  }

  console.log(`Prerendered / (${rootHtml.length.toLocaleString()} HTML characters, ${textLength.toLocaleString()} text characters)`);
} finally {
  if (browser) await browser.close();
  await new Promise((resolveServer) => server.close(resolveServer));
}
