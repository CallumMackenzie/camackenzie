
import React, { useEffect, useRef, useState } from "react";
import tree from "./tree.svg";
import { theme } from "./App";
import { useMediaQuery } from "@mui/material";

export const DynamicBackground = () => {
	const isLg = useMediaQuery(theme.breakpoints.only('lg')),
		isXl = useMediaQuery(theme.breakpoints.up('xl')),
		isMd = useMediaQuery(theme.breakpoints.only('md'));

	const computeTreeGridWidth = () => isXl ? 5 : isLg ? 4 : isMd ? 2 : 1;

	const [treeGridWidth, setTreeGridWidth] = useState(computeTreeGridWidth()),
		treeGridHeight = 4, [nTrees, setNTrees] = useState(treeGridWidth * treeGridHeight);
	const treeRefs: React.MutableRefObject<Array<HTMLImageElement | null>> = useRef([]);

	useEffect(() => {
		const newWid = computeTreeGridWidth();
		setTreeGridWidth(newWid);
		setNTrees(treeGridHeight * newWid);
	}, [isLg, isXl, isMd])

	const [randomOffSets, setRandomOffsets] = useState<undefined | number[]>(undefined);

	useEffect(() => {
		const a = [];
		for (let _ in [...Array(nTrees)])
			a.push(Math.random() * 360);
		setRandomOffsets(a);
	}, [nTrees]);

	useEffect(() => {
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
				const y = window.scrollY + gridY / treeGridHeight * window.innerHeight * 1.5;

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
	}, [randomOffSets, treeGridWidth, nTrees, window.innerWidth, window.innerHeight, treeGridHeight]);

	return (<>
		<div className="position-absolute" style={{
			width: "100%",
			maxWidth: "100%",
			zIndex: "-5",
		}}>
			<img src="img/landscape-bg.jpg"
				alt="Landscape background"
				style={{
					objectFit: "cover",
					width: "100%",
					minHeight: "100vh",
					position: "absolute",
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
					src={tree}
					alt="Tree"
					className="tree"
					ref={el => treeRefs.current[i] = el} />;
			})}
		</div>
	</>);
};