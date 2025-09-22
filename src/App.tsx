import React from 'react';

import { createTheme } from '@mui/material/styles';

import './App.scss';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ThemeProvider } from '@emotion/react';
import { TitleCard } from './TitleCard';
import { AboutCard } from './AboutCard';
import { Container, CssBaseline } from '@mui/material';
import { red, teal } from '@mui/material/colors';
import { TreeScrollBackground } from './TreeScrollBackground';
import { BottomCard } from './BottomCard';
import { ProjectsCard } from './ProjectsCard';
import { SkillsCard } from './SkillsCard';
import { Project } from './Experience';
import { NavigationBar } from './NavigationBar';
import { ResumePreview } from './Resume';

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
			light: teal[400],
			main: teal[600],
			dark: teal[900],
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
	components: {
		MuiAvatarGroup: {
			styleOverrides: {
				root: {
					".MuiAvatar-root": {
						border: 'none'
					}
				},
			}
		}
	}
});

export type ProjectRefs = Map<Project, React.RefObject<HTMLDivElement>>;

const App = () => {

	const titleCardRef = React.createRef<HTMLDivElement>();
	const aboutCardRef = React.createRef<HTMLDivElement>();
	const skillsCardRef = React.createRef<HTMLDivElement>();
	const projectCardRef = React.createRef<HTMLDivElement>();
	const resumeCardRef = React.createRef<HTMLDivElement>();

	const projectRefs: ProjectRefs = new Map();
	Project.All.forEach(project => projectRefs.set(project, React.createRef<HTMLDivElement>()));

	return (<>
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			<TreeScrollBackground />
			<NavigationBar
				aboutCardRef={aboutCardRef}
				resumeCardRef={resumeCardRef}
				skillsCardRef={skillsCardRef}
				titleCardRef={titleCardRef}
				projectCardRef={projectCardRef} />
			<Container className='px-2 py-4'>
				<TitleCard aboutCardRef={aboutCardRef} titleCardRef={titleCardRef} />
				<AboutCard aboutCardRef={aboutCardRef} />
				<ResumePreview resumeCardRef={resumeCardRef} />
				<SkillsCard projectRefs={projectRefs} skillsCardRef={skillsCardRef} />
				<ProjectsCard projectRefs={projectRefs} projectCardRef={projectCardRef} />
				<BottomCard />
			</Container>
		</ThemeProvider>
	</>);
}

export default App;
