import React, { useState, useEffect } from 'react';

import { Container, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from "./App";

export const AboutCard = (props: {
	aboutCardRef: React.RefObject<HTMLDivElement>
}) => {
	const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (<>
		<Paper elevation={4} className='container py-2 px-3 my-3 text-center' ref={props.aboutCardRef}>
			<div className='row'>
				<h1 className='col'>About</h1>
			</div>
			<div className='row py-4 px-5 justify-content-center'>
				<div className={(smallScreen ? "col-11" : "col-6") + " container text-start m-auto"}>
					<p>I am a current undergraduate student at the University of British Columbia in Vancouver, and am currently seeking employment and
						Co-op opportunities for the summer of 2024 and semesters following!
						<br /> <br />
						I'm a type 1 diabetic, which means I am constantly problem solving in my own life to keep my health optimal. I Carry this same
						philosophy and these problem solving skills into my technical work, constantly looking for issues and improvements.
					</p>
				</div>
				<div className={smallScreen ? "col-11" : "col-5"}>
					<img className='img-fluid m-auto px-3' alt='Callum Mackenzie'
						src="img/callum-mackenzie-2.png" />
				</div>
			</div>
		</Paper>
	</>);
};
