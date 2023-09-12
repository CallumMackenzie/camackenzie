import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from "./App";
import LocationOn from '@mui/icons-material/LocationOn';
import { Avatar, Container } from '@mui/material';
import { Paper, IconButton, Tooltip } from '@mui/material';
import Mail from "@mui/icons-material/Mail";


const openGithub = () => {
	window.open("https://github.com/CallumMackenzie");
}
const openLinkedin = () => {
	window.open("https://www.linkedin.com/in/callum-mackenzie-704854212/");
}
const openMailTo = () => {
	window.open("mailto:callum.alex.mackenzie@gmail.com");
}

export const TitleCard = () => {
	const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (<>
		<div className='title container p-3'>
			<div className='row justify-content-center px-2'>
				<div className={(smallScreen ? "col-11" : "col-6") + " container text-center mx-auto"}>
					<h1 className='name-heading row display-1'>
						Callum Mackenzie
					</h1>
					<p className='row h4'>
						Second Year Computer Science & Statistics Major at the University of British Columbia
					</p>
					<div className='row justify-content-center'>
						<Avatar className='col-auto my-auto'><LocationOn /></Avatar>
						<p className='col-auto my-auto'>Vancouver + Calgary</p>
					</div>
					<div className='row py-4 justify-content-center'>
						<Paper className='col-auto'>
							<Tooltip className='px-4' title="Github">
								<IconButton onClick={openGithub}>
									<Avatar alt="Github" src="/img/github-logo.png" />
								</IconButton>
							</Tooltip>
							<Tooltip className='px-4' title="Linkedin">
								<IconButton onClick={openLinkedin}>
									<Avatar alt="Linkedin" variant="rounded" src="/img/linkedin-logo.png" />
								</IconButton>
							</Tooltip>
							<Tooltip className='px-4' title="Mail">
								<IconButton onClick={openMailTo}>
									<Avatar alt='Mail'><Mail /></Avatar>
								</IconButton>
							</Tooltip>
						</Paper>
					</div>
				</div>
				<div className={smallScreen ? "col-10" : "col-6"}>
					<img className='img-fluid mx-auto px-5' alt='Callum Mackenzie'
						src="img/callum-mackenzie.png" />
				</div>
			</div>
		</div>
	</>);
};