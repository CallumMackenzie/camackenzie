import React, { useState } from 'react';

import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';

import './App.scss';
import styles from './style.module.scss';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { ThemeProvider } from '@emotion/react';

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

const App = () => {
	const theme = createTheme({
		palette: {
			primary: {
				light: '#468189',
				main: '#031926',
				dark: '#000',
				contrastText: '#fff',
			},
			secondary: {
				light: '#9DBEBB',
				main: '#77ACA2',
				dark: '#468189',
				contrastText: '#000',
			},
		},
	});

	return (<>
		<ThemeProvider theme={theme}>
			<AppBar position='static'>
				<Toolbar variant="dense">

				</Toolbar>
			</AppBar>
			<div className='title container p-3'>
				<div className='row px-2'>
					<div className='col text-center'>
						<h1 className='display-1'>
							Callum Mackenzie
						</h1>
						<p className='lead'>
							Second Year Computer Science & Statistics Major at the University of British Columbia
						</p>
					</div>
					<div className="col-8 mx-auto">
						<img className='img-fluid mx-auto px-5' alt='Callum Mackenzie'
							src="img/callum-mackenzie.png" />
					</div>

				</div>
			</div>
			<div className='summary container py-2 px-3'>
				<h2 className='display-4 text-center'>
					About
				</h2>
				<p>
					ABOUT HERE
				</p>
			</div>
		</ThemeProvider>
	</>);
}

export default App;
