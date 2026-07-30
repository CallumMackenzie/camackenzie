
import './App.scss';
import React, { useCallback, useEffect, useRef, useState } from "react";
import tree from "./tree.svg";
import { theme } from "./App";
import { useMediaQuery } from "@mui/material";

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
		const newWid = computeTreeGridWidth();
		setTreeGridWidth(newWid);
		setNTrees(treeGridHeight * newWid);
	}, [computeTreeGridWidth])

	const [randomOffSets, setRandomOffsets] = useState<undefined | number[]>(undefined);

	useEffect(() => {
		const a = [];
		for (let i = 0; i < nTrees; i++)
			a.push(Math.random() * 360);
		setRandomOffsets(a);
	}, [nTrees]);

	useEffect(() => {
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
		if (isMobile) return;
		if (randomOffSets === undefined) return;
		const treeRotateOnScroll = () => {
			if (treeRefs.current === null) return;
			treeRefs.current.forEach((treeRef, i) => {
				if (treeRef === null) return;
				treeRef.style.width = `${1 / treeGridWidth * 50}%`;

				const body = document.body,
					html = document.documentElement,
					height = Math.max(body.scrollHeight, body.offsetHeight,
						html.clientHeight, html.scrollHeight, html.offsetHeight);
				const scrollPos = window.scrollY / window.innerHeight;

				const gridY = Math.floor(i / treeGridWidth), gridX = i - gridY * treeGridWidth;

				const rotate = scrollPos * 180 + randomOffSets[i];
				const x = (gridX + 0.25) / treeGridWidth * window.innerWidth;
				let y = window.scrollY + gridY / treeGridHeight * window.innerHeight * 1.5;

				if (y < 5) y = 5;

				const lowestTreePlacement = height - treeRef.height * 1.8;
				treeRef.style.opacity = `${Math.pow(0.99, y - lowestTreePlacement)}`;
				if (y < lowestTreePlacement)
					treeRef.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
				else
					treeRef.style.transform = `translate(${x}px, ${lowestTreePlacement}px) rotate(${rotate})`;
			});
		};
		window.removeEventListener('scroll', treeRotateOnScroll);
		window.addEventListener('scroll', treeRotateOnScroll);
		treeRotateOnScroll();
		return () => window.removeEventListener('scroll', treeRotateOnScroll);
	}, [isMobile, randomOffSets, treeGridWidth, nTrees, treeGridHeight]);

	return (<>
		<div className="position-absolute" style={{
			width: "100%",
			maxWidth: "100%",
			zIndex: "-5",
		}}>
			<img src="img/landscape-bg-comp.jpg"
				loading='eager'
				alt="Landscape background"
				onLoad={e => e.currentTarget.style.animation = ""}
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
				return <img key={i}
					style={{
						transitionProperty: "transform",
						transitionDuration: "100ms",
						position: "absolute",
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
