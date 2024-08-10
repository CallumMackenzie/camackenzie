import React, { useState, useEffect } from 'react';

import { Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from "./App";

export const AboutCard = (props: {
	aboutCardRef: React.RefObject<HTMLDivElement>
}) => {
	const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (<>
		<Paper elevation={4} className='container py-2 px-2 my-5 text-center' ref={props.aboutCardRef}>
			<div className='row py-2 px-1 justify-content-center'>
				<div className={(smallScreen ? "col-11" : "col-6") + " container text-center"}>
					<h1 className='py-4'>About</h1>
					<p className='text-start'
						style={{
							fontSize: 'large'
						}}>
						I am a current undergraduate student at the University of British Columbia in Vancouver, and am currently seeking 
						Co-op opportunities for January 2025
						<br /> <br />
						My interests include:
					</p>
					<ul className='text-start'
						style={{
							fontSize: 'large'
						}}>
						<li>Software Engineering</li>
						<li>Embedded Systems</li>
						<li>Data Science & Statistics</li>
						<li>Biotechnology</li>
						<li>Project Management</li>
						<li>Fitness & Nutrition</li>
					</ul>
				</div>
				<div className={smallScreen ? "col-11" : "col-5"}>
					<img
						className='img-fluid m-auto px-3'
						alt='Callum Mackenzie'
						src="img/callum-mackenzie-2.jpg"
						onLoad={e => e.currentTarget.style.animation = ""}
						style={{
							borderRadius: "50%",
							animation: "image-preload 5s infinite",
							overflow: "hidden",
							minHeight: '100px'
						}}
					/>
				</div>
			</div>
		</Paper>
	</>);
};
