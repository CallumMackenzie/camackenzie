import React, { useState, useEffect } from 'react';

import { Container, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from "./App";
import * as IW from "ingeniumweb/build/Ingenium";

export const InfoCard = () => {
	const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (<>
		<Paper elevation={4} className='container py-2 px-3 my-3 text-center'>
			<div className='row'>
				<h1 className='col'>About</h1>
			</div>
			<div className='row py-4 px-5 justify-content-center'>
				<div className={(smallScreen ? "col-11" : "col-6") + " container text-start mx-auto"}>
					<p>I am a current undergraduate student at the University of British Columbia in Vancouver, and am currently seeking employment and
						Co-op opportunities for the summer of 2024 and semesters following!
						<br /> <br />
						I'm a type 1 diabetic, which means I am constantly problem solving in my own life to keep my health optimal. I Carry this same
						philosophy and these problem solving skills into my technical work, constantly looking for issues and improvements.
					</p>
				</div>
				<div className={smallScreen ? "col-9" : "col-4"}>
					<img className='img-fluid mx-auto px-5' alt='Callum Mackenzie'
						src="img/callum-mackenzie.png" />
				</div>
			</div>
		</Paper>
	</>);
};
