
import { Box, Container, Divider, LinearProgress, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { theme } from './App';
import React from 'react';

type SkillList = Array<{name: string, proficiency: number | undefined}>

const languages: SkillList = [
		{ name: "Typescript", proficiency: 100 },
		{ name: "Java", proficiency: 100 },
		{ name: "C/C++", proficiency: 70 },
		{ name: "HTML/CSS/JS", proficiency: 70 },
		{ name: "Rust", proficiency: 60 },
		{ name: "R", proficiency: 60 },
		{ name: "Python", proficiency: 50 },
		{ name: "Kotlin", proficiency: undefined },
	];

const technologies: SkillList= [
		{ name: "Git", proficiency: 100 },
		{ name: "React", proficiency: 80 },
		{ name: "Maven/Gradle", proficiency: 70 },
		{ name: "AWS", proficiency: 60 },
		{ name: "Firebase", proficiency: 60 },
		{ name: "OpenGL", proficiency: 50 },
		{ name: "Arduino", proficiency: undefined },
		{ name: ".NET", proficiency: undefined },
	];

const otherSkills: SkillList = [
		{ name: "OOP", proficiency: 100 },
		{ name: "Test-Driven Development", proficiency: 80 },
		{ name: "Technical Communication", proficiency: undefined },
		{ name: "Linux", proficiency: 80 },
		{ name: "Design Patterns", proficiency: 80 },
		{ name: "UI Design", proficiency: 70 },
		{ name: "CAD (Autodesk Fusion 360)", proficiency: 80 },
	];

export const SkillsCard = () => {
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (<>
		<Paper elevation={4}>
			<Stack textAlign={'center'} padding={2}>
				<h1 className='col'>Skills</h1>
				<Stack direction={isSmallScreen ? 'column' : 'row'} marginBottom={2} spacing={2}>
					{[{ section: "Languages", arr: languages },
					{ section: "Technologies", arr: technologies },
					{ section: "Other Skills", arr: otherSkills }].map(o => (
						<Container sx={{ textAlign: 'center' }}>
							<h3>{o.section}</h3>
							<Stack direction='column'>
								<Divider sx={{
									background: 'white'
								}} />
								{o.arr.map(elem => (
									<React.Fragment>
										<Box display='flex' justifyContent='center' alignItems='center'>
											<Box sx={{ minWidth: "34%" }}>
												<Typography variant='body1' fontStyle={'revert'}>{elem.name}</Typography>
											</Box>
										</Box>
										<Divider sx={{
											background: 'white'
										}} />
									</React.Fragment>
								))}
							</Stack>
						</Container>
					))}
				</Stack>
			</Stack>
		</Paper >
	</>);
}