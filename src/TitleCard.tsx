import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from "./App";
import LocationOn from '@mui/icons-material/LocationOn';
import { Avatar, Box, Container } from '@mui/material';
import { Paper, IconButton, Tooltip } from '@mui/material';
import Mail from "@mui/icons-material/Mail";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';


const openGithub = () => {
	window.open("https://github.com/CallumMackenzie");
}
const openLinkedin = () => {
	window.open("https://www.linkedin.com/in/callum-ma/");
}
const openMailTo = () => {
	window.open("mailto:callum.alex.mackenzie@gmail.com");
}

export const TitleCard = (props: {
	aboutCardRef: React.RefObject<HTMLDivElement>,
	titleCardRef: React.RefObject<HTMLDivElement>
}) => {
	const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (<>
		<div className='title d-flex align-items-center justify-content-center' ref={props.titleCardRef}>
			<div className='container px-2 py-3'>
				<div className='title-content row align-items-center justify-content-center px-5 py-5'>
					<div className={(smallScreen ? "col-11" : "col-6") + " container text-center mx-auto"}>
						<div className='row'>
							<h1 className='display-1'>
								Callum Mackenzie
							</h1>
						</div>
						<div className='row'>
							<p className='h4'>
								Third Year Computer Science & Statistics Major at the University of British Columbia
							</p>
						</div>
						<div className='row justify-content-center'>
							<Avatar className='col-auto my-auto'><LocationOn /></Avatar>
							<p className='col-auto my-auto'>Vancouver + Calgary</p>
						</div>
						<Paper className='row-auto my-4 justify-content-center'>
							<Tooltip className='col-auto px-2' title="Github">
								<IconButton onClick={openGithub}>
									<Avatar alt="Github" src="/img/github-logo.png" />
								</IconButton>
							</Tooltip>
							<Tooltip className='col-auto px-2' title="Linkedin">
								<IconButton onClick={openLinkedin}>
									<Avatar alt="Linkedin" variant="rounded" src="/img/linkedin-logo.png" />
								</IconButton>
							</Tooltip>
							<Tooltip className='col-auto px-2' title="Mail">
								<IconButton onClick={openMailTo}>
									<Avatar alt='Mail'><Mail /></Avatar>
								</IconButton>
							</Tooltip>
						</Paper>
					</div>
					<div className={smallScreen ? "col-10" : "col-6"}>
						<img className='img-fluid mx-auto px-5'
							alt='Callum Mackenzie'
							loading='eager'
							src="img/callum-mackenzie.jpg"
							onLoad={e => e.currentTarget.style.animation = ""}
							style={{
								borderRadius: "50%",
								overflow: "hidden",
								animation: "image-preload 5s infinite",
								minHeight: '100px'
							}} />
					</div>
				</div>
				<div className='row justify-content-center py-3'>
					<Tooltip className='col-auto' title='About'>
						<IconButton onClick={() => props.aboutCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
							<Avatar alt="About"><ArrowDropDownIcon /></Avatar>
						</IconButton>
					</Tooltip>
				</div>
			</div>
		</div>
	</>);
};