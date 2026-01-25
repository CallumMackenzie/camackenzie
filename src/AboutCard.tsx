import React from 'react';

import { Divider, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from "./App";
import { ResumeCard } from './ResumeCard';

export const AboutCard = (props: {
	aboutCardRef: React.RefObject<HTMLDivElement>
	resumeCardRef: React.RefObject<HTMLDivElement>
}) => {
	const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (<>
		<Paper elevation={4} className='container py-2 px-2 my-5 text-center' ref={props.aboutCardRef}>
			<div className='row py-2 px-1 justify-content-center'>
				<div className={(smallScreen ? "col-11" : "col-6") + " container text-center"}>
					<h1 className=''>About</h1>
					<Divider
						sx={{
							background: 'white'
						}} />
					<p className='text-start py-1'
						style={{
							fontSize: 'large'
						}}>
						I am a current undergraduate student at the University of British Columbia in Vancouver, and am an on-call Embedded Software Engineering Co-op with General Dynamics.
						<div className='py-2'>
							<Divider sx={{
								background: 'white'
							}} />
						</div>
						My interests and passions include:
					</p>
					<ul className='text-start'
						style={{
							fontSize: 'large'
						}}>
						<li>Embedded Systems</li>
						<li>Data Science & Statistics</li>
						<li>Biotechnology & Bioinformatics</li>
						<li>Fitness & Nutrition</li>
						<li>Backpacking & Traveling</li>
						<li>Motorsport</li>
						<li>Acoustic Guitar</li>
					</ul>
				</div>
				<div className={smallScreen ? "col-11" : "col-5"}>
					<img
						className='img-fluid m-auto px-3'
						alt='Callum Mackenzie'
						src="img/callum-mackenzie-2.png"
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
			<ResumeCard resumeCardRef={props.resumeCardRef} />
		</Paper>
	</>);
};
