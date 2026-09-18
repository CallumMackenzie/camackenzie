declare global {
  interface Window {
    __PRERENDERING__?: boolean;
    __PRERENDER_VALIDATION__?: boolean;
  }
}

export const isPrerendering = (): boolean =>
  typeof window !== "undefined" && window.__PRERENDERING__ === true;

export const isPrerenderValidation = (): boolean =>
  typeof window !== "undefined" && window.__PRERENDER_VALIDATION__ === true;

export {};
