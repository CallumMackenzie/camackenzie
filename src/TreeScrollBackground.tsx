
import './App.scss';
import React, { useCallback, useEffect, useRef, useState } from "react";
import tree from "./tree.svg";
import { theme } from "./App";
import { useMediaQuery } from "@mui/material";
import { isPrerendering } from "./prerender";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TreeScrollBackground = () => {
	const getStableMobileHeight = () =>
		typeof window === "undefined"
			? 0
			: Math.max(window.screen?.height ?? 0, window.innerHeight);

	const isLg = useMediaQuery(theme.breakpoints.only('lg')),
		isXl = useMediaQuery(theme.breakpoints.up('xl')),
		isMd = useMediaQuery(theme.breakpoints.only('md')),
		isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const computeTreeGridWidth = useCallback(
		() => isMobile ? 0 : isXl ? 5 : isLg ? 4 : isMd ? 2 : 1,
		[isMobile, isLg, isXl, isMd],
	);

	const [treeGridWidth, setTreeGridWidth] = useState(computeTreeGridWidth()),
		treeGridHeight = 4, [nTrees, setNTrees] = useState(treeGridWidth * treeGridHeight);
	const treeRefs: React.MutableRefObject<Array<HTMLImageElement | null>> = useRef([]);
	const viewportWidthRef = useRef(typeof window === "undefined" ? 0 : window.innerWidth);
	const [stableMobileHeight, setStableMobileHeight] = useState(getStableMobileHeight());

	useEffect(() => {
		if (isPrerendering()) return;
		const newWid = computeTreeGridWidth();
		setTreeGridWidth(newWid);
		setNTrees(treeGridHeight * newWid);
	}, [computeTreeGridWidth])

	const [randomOffSets, setRandomOffsets] = useState<undefined | number[]>(undefined);
	const [randomRotationSpeeds, setRandomRotationSpeeds] = useState<undefined | number[]>(undefined);

	useEffect(() => {
		if (isPrerendering()) return;
		const offsets = [];
		const rotationSpeeds = [];
		for (let i = 0; i < nTrees; i++) {
			offsets.push(Math.random() * 360);
			rotationSpeeds.push((Math.random() < 0.5 ? -1 : 1) * (100 + Math.random() * 180));
		}
		setRandomOffsets(offsets);
		setRandomRotationSpeeds(rotationSpeeds);
	}, [nTrees]);

	useEffect(() => {
		if (isPrerendering()) return;
		const updateStableMobileHeight = () => {
			if (!isMobile) return;
			const widthChanged = Math.abs(window.innerWidth - viewportWidthRef.current) > 80;
			if (!widthChanged) return;
			viewportWidthRef.current = window.innerWidth;
			setStableMobileHeight(getStableMobileHeight());
		};

		window.addEventListener('resize', updateStableMobileHeight);
		window.addEventListener('orientationchange', updateStableMobileHeight);
		return () => {
			window.removeEventListener('resize', updateStableMobileHeight);
			window.removeEventListener('orientationchange', updateStableMobileHeight);
		};
	}, [isMobile]);

	useEffect(() => {
		if (isPrerendering()) return;
		if (isMobile) return;
		if (randomOffSets === undefined) return;
		if (randomRotationSpeeds === undefined) return;
		const trees = treeRefs.current.slice(0, nTrees);
		let pageHeight = 0;
		let treeHeights: number[] = [];
		const motions = trees.map(el => el ? {
			rotation: gsap.quickTo(el, 'rotation', { duration: 0.25, ease: 'power2.out' }),
			opacity: gsap.quickTo(el, 'opacity', { duration: 0.25, ease: 'power2.out' }),
		} : null);

		const updateTrees = (trigger: ScrollTrigger) => {
			const scrollY = trigger.scroll();
			const { innerHeight } = window;
			const scrollPos = scrollY / innerHeight;
			trees.forEach((el, i) => {
				const motion = motions[i];
				if (!el || !motion) return;
				const gridY = Math.floor(i / treeGridWidth);
				const documentY = scrollY + gridY / treeGridHeight * innerHeight * 1.5;
				const fadeStart = pageHeight - treeHeights[i] * 1.8;
				motion.rotation(scrollPos * randomRotationSpeeds[i] + randomOffSets[i]);
				motion.opacity(Math.min(1, Math.pow(0.99, documentY - fadeStart)));
			});
		};
		const measureTrees = (trigger: ScrollTrigger) => {
			// Measure before animating; GSAP only updates composited properties on scroll.
			const body = document.body;
			const html = document.documentElement;
			pageHeight = Math.max(body.scrollHeight, body.offsetHeight,
				html.clientHeight, html.scrollHeight, html.offsetHeight);
			treeHeights = trees.map(el => el?.offsetHeight ?? 0);
			updateTrees(trigger);
		};

		const trigger = ScrollTrigger.create({
			start: 0,
			end: () => ScrollTrigger.maxScroll(window),
			onUpdate: updateTrees,
			onRefresh: measureTrees,
		});
		// Lazy images and expanding content can change the layout after initial render.
		const observer = new ResizeObserver(() => ScrollTrigger.refresh());
		observer.observe(document.body);
		const onTreeLoad = () => ScrollTrigger.refresh();
		trees.forEach(el => el?.addEventListener('load', onTreeLoad));
		return () => {
			trigger.kill();
			observer.disconnect();
			trees.forEach(el => el?.removeEventListener('load', onTreeLoad));
			motions.forEach(motion => {
				motion?.rotation.tween.kill();
				motion?.opacity.tween.kill();
			});
		};
	}, [isMobile, randomOffSets, randomRotationSpeeds, treeGridWidth, nTrees, treeGridHeight]);

	return (<>
		<div className="position-absolute" style={{
			width: "100%",
			maxWidth: "100%",
			zIndex: "-5",
		}}>
			<img src="img/landscape-bg-comp.jpg"
				loading='eager'
				alt="Landscape background"
				onLoad={e => {
					if (!isPrerendering()) e.currentTarget.style.animation = "";
				}}
				style={{
					objectFit: "cover",
					width: isMobile ? "100vw" : "100%",
					height: isMobile ? `${stableMobileHeight}px` : undefined,
					animation: 'image-preload 4.7s infinite',
					minHeight: isMobile ? `${stableMobileHeight}px` : "100svh",
					position: isMobile ? "fixed" : "absolute",
					top: 0,
					left: 0,
					overflow: 'hidden'
				}} />
			{[...Array(nTrees)].map((x, i) => {
				const gridY = Math.floor(i / treeGridWidth);
				const gridX = i % treeGridWidth;
				return <img key={i}
					style={{
						width: `${50 / treeGridWidth}vw`,
						position: "fixed",
						left: `${(gridX + 0.25) / treeGridWidth * 100}vw`,
						top: `max(5px, ${gridY / treeGridHeight * 150}vh)`,
						zIndex: "-6",
						overflow: 'hidden'
					}}
					loading='lazy'
					src={tree}
					alt="Tree"
					className="tree"
					ref={el => treeRefs.current[i] = el} />;
			})}
		</div>
	</>);
};
