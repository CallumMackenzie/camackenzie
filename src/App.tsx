import React, { useEffect } from 'react';

import { createTheme } from '@mui/material/styles';

import './App.scss';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ThemeProvider } from '@emotion/react';
import { TitleCard } from './TitleCard';
import { AboutCard } from './AboutCard';
import { Container, CssBaseline } from '@mui/material';
import { TreeScrollBackground } from './TreeScrollBackground';
import { BottomCard } from './BottomCard';
import { ProjectsCard } from './ProjectsCard';
import { SkillsCard } from './SkillsCard';
import { EmploymentRole, Project } from './Experience';
import { NavigationBar } from './NavigationBar';
import { ExperienceCard } from './ExperienceCard';

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
getAnalytics(app);

export const theme = createTheme({
	palette: {
		primary: {
			light: "#9fb7aa",
			main: "#6f8f7a",
			dark: "#22362d",
		},
		secondary: {
			main: "#d26a2e",
		},
		background: {
			default: "#0f1110",
			paper: "#1d2320"
		},
		text: {
			primary: "#e8e1d4",
			secondary: "#f5f1e8",
			disabled: "#d39a72"
		}
	},
	shape: {
		borderRadius: 6,
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundImage: "none",
					backgroundColor: "#171b18",
					borderBottom: "1px solid rgba(210, 106, 46, 0.45)",
					boxShadow: "0 10px 28px rgba(0, 0, 0, 0.3)",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: "linear-gradient(145deg, rgba(37, 44, 40, 0.96), rgba(22, 27, 25, 0.96))",
					border: "1px solid rgba(159, 183, 170, 0.22)",
					boxShadow: "0 18px 42px rgba(0, 0, 0, 0.38)",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 4,
					letterSpacing: 0,
					fontWeight: 700,
					color: "#e8e1d4",
					"&:hover": {
						backgroundColor: "rgba(210, 106, 46, 0.16)",
					},
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					color: "#e8e1d4",
					"&:hover": {
						backgroundColor: "rgba(210, 106, 46, 0.16)",
					},
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: "rgba(159, 183, 170, 0.4)",
				},
			},
		},
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
export type EmploymentRoleRefs = Map<EmploymentRole, React.RefObject<HTMLDivElement>>;

const App = () => {

	const titleCardRef = React.createRef<HTMLDivElement>();
	const aboutCardRef = React.createRef<HTMLDivElement>();
	const skillsCardRef = React.createRef<HTMLDivElement>();
	const experienceCardRef = React.createRef<HTMLDivElement>();
	const projectCardRef = React.createRef<HTMLDivElement>();
	const resumeCardRef = React.createRef<HTMLDivElement>();

	const projectRefs = React.useMemo<ProjectRefs>(() => {
		const refs: ProjectRefs = new Map();
		Project.All.forEach(project => refs.set(project, React.createRef<HTMLDivElement>()));
		return refs;
	}, []);
	const employmentRoleRefs = React.useMemo<EmploymentRoleRefs>(() => {
		const refs: EmploymentRoleRefs = new Map();
		EmploymentRole.All.forEach(role => refs.set(role, React.createRef<HTMLDivElement>()));
		return refs;
	}, []);

	// Scroll to based on URL hash
	useEffect(() => {
		setTimeout(() => {
			const hash = window.location.hash;
			const proj = Project.All.find(p => p.urlHash() === hash);
			if (proj) {
				const ref = projectRefs.get(proj);
				ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		}, 600);
	}, [projectRefs]);

	return (<>
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			<TreeScrollBackground />
			<NavigationBar
				aboutCardRef={aboutCardRef}
				skillsCardRef={skillsCardRef}
				experienceCardRef={experienceCardRef}
				titleCardRef={titleCardRef}
				projectCardRef={projectCardRef} />
			<Container sx={{ pt: 4 }} maxWidth="md">
				<TitleCard aboutCardRef={aboutCardRef} titleCardRef={titleCardRef} />
				<AboutCard aboutCardRef={aboutCardRef} />
				<SkillsCard
					projectRefs={projectRefs}
					employmentRoleRefs={employmentRoleRefs}
					skillsCardRef={skillsCardRef} />
				<ExperienceCard
					experienceCardRef={experienceCardRef}
					employmentRoleRefs={employmentRoleRefs}
					resumeCardRef={resumeCardRef} />
				<ProjectsCard projectRefs={projectRefs} projectCardRef={projectCardRef} />
				<BottomCard />
			</Container>
		</ThemeProvider>
	</>);
}

export default App;
