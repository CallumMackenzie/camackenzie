import React from 'react';

import { createTheme } from '@mui/material/styles';

import './App.scss';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { ThemeProvider } from '@emotion/react';
import { TitleCard } from './TitleCard';
import { AboutCard } from './AboutCard';
import { Container, CssBaseline } from '@mui/material';
import { red, teal } from '@mui/material/colors';
import { DynamicBackground } from './DynamicBackground';
import { BottomCard } from './BottomCard';
import { ProjectsCard } from './ProjectsCard';
import { SkillsCard } from './SkillsCard';

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

export const theme = createTheme({
	palette: {
		primary: {
			main: teal[200],
		},
		secondary: {
			main: red["A100"],
		},
		background: {
			default: "#0e1111",
			paper: "#232b2b"
		},
		text: {
			primary: "#C3CbCb",
			secondary: "#F5F5F5",
			disabled: "#FCC8D1"
		}
	},
});

const App = () => {

	const aboutCardRef = React.createRef<HTMLDivElement>();

	return (<>
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			<DynamicBackground />
			<Container className='app-container p-2'>
				<TitleCard aboutCardRef={aboutCardRef}/>
				<AboutCard aboutCardRef={aboutCardRef}/>
				<SkillsCard />
				<ProjectsCard />
				<BottomCard />
			</Container>
		</ThemeProvider>
	</>);
}

export default App;
