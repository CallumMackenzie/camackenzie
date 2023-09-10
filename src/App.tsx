import React from 'react';

import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';

import './App.scss';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { ThemeProvider } from '@emotion/react';
import { TitleCard } from './TitleCard';
import { InfoCard } from './InfoCard';
import { Avatar, Box, Container, CssBaseline, IconButton, Menu, Tooltip } from '@mui/material';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
	measurementId: process.env.REACT_APP_measurementId
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const openGithub = () => {
	window.open("https://github.com/CallumMackenzie");
};

export const theme = createTheme({
	palette: {
		primary: {
			dark: "#265e5c",
			main: "#2d8185",
			light: "#31959c",
			contrastText: "#F5F7DC",
		},
		secondary: {
			light: "#6d322e",
			main: "#5e2627",
			dark: "#4c181d",
			contrastText: "#0F0326",
		},
		background: {
			default: "#032e2d",
			paper: "#000000",
		},
		text: {
			primary: "#F5F7DC",
			secondary: "#000000"
		}
	},
});

const App = () => {

	return (<>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position='static'>
				<Toolbar variant="dense">
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Github">
							<IconButton onClick={openGithub}>
								<Avatar alt="Github" src="/img/github-logo.png" />
							</IconButton>
						</Tooltip>
					</Box>
				</Toolbar>
			</AppBar>
			<Container >
				<TitleCard />
				<InfoCard />
			</Container>
		</ThemeProvider>
	</>);
}

export default App;
