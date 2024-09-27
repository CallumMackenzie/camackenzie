import Grid from '@mui/material/Grid2';
import { Avatar, AvatarGroup, Box, Button, Container, Divider, IconButton, Paper, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { ProjectRefs, theme } from './App';
import React, { useState } from 'react';
import { Language, OtherSkill, Project, Skill, Technology } from './Experience';


export const SkillsCard = (props: {
	projectRefs: ProjectRefs,
	skillsCardRef: React.RefObject<HTMLDivElement>
}) => {
	const [skillOpen, setSkillOpen] = useState<Skill | undefined>();
	const [lastSelectedSkill, setLastSelectedSkill] = useState<Skill | undefined>();

	return (<>
		<Paper elevation={4}>
			<Stack textAlign={'center'}
				ref={props.skillsCardRef}
				padding={2}
				spacing={1}
				alignItems={'center'}>
				<h1 className='col'>Skills</h1>
				<Typography>
					Select a skill to view related projects and other skills.
				</Typography>
				<SkillList skillOpen={skillOpen}
					setSkillOpen={setSkillOpen}
					lastSelectedSkill={lastSelectedSkill}
					setLastSelectedSkill={setLastSelectedSkill} />
				<Divider sx={{ background: 'white', width: '80%' }} />
				<SkillInfoView skill={lastSelectedSkill} projectRefs={props.projectRefs} />
			</Stack>
		</Paper >
	</>);
}

const SkillList = (props: {
	skillOpen: Skill | undefined,
	setSkillOpen: (x: Skill | undefined) => void,
	lastSelectedSkill: Skill | undefined,
	setLastSelectedSkill: (x: Skill | undefined) => void,
}) => {
	return (<>
		{[{ name: "Languages", list: Language.All },
		{ name: "Technologies", list: Technology.All },
		{ name: "Other Skills", list: OtherSkill.All }]
			.map(skillType => (<>
				<Divider sx={{ background: 'white', width: '80%' }} />
				<h4>{skillType.name}</h4>
				<Grid container justifyContent={'center'}>
					{skillType.list.map(skill => (<>
						<Grid>
							<Tooltip arrow
								disableHoverListener
								onOpen={() => props.setSkillOpen(skill)}
								onClose={() => props.setSkillOpen(undefined)}
								open={props.skillOpen === skill}
								title={skill.name}>
								<IconButton
									onClick={() => {
										props.setLastSelectedSkill(props.lastSelectedSkill === skill ? undefined : skill);
										props.setSkillOpen(props.skillOpen === skill ? undefined : skill);
									}}>
									<Avatar
										variant='square'
										alt={skill.name}
										src={"img/technologies/" + skill.src} />
								</IconButton>
							</Tooltip>
						</Grid>
					</>))}
				</Grid>
			</>))
		}
	</>);
};

const SkillInfoView = (props: {
	skill: Skill | undefined,
	projectRefs: ProjectRefs
}) => {
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMedScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (<>
		<Container sx={{ minHeight: 140 }}>
			{props.skill === undefined &&
				<h5>Select a skill above to see more.</h5>}

			<Stack
				sx={{
					transition: "opacity 0.5s",
					opacity: props.skill === undefined ? 0 : 1
				}}
				visibility={props.skill === undefined ? 'hidden' : 'visible'}
				justifyContent={'center'}
				justifyItems={'center'}
				alignItems={'center'}
				spacing={2}
				direction={isSmallScreen ? 'column' : 'row'}>
				<Stack alignItems={'center'} sx={{
					width: "50%"
				}}>
					<h5>Skills used with {props.skill?.name ?? ""}</h5>
					<AvatarGroup max={isSmallScreen ? 8 : isMedScreen ? 9 : 13}>
						{Project.skillsUsedWith(props.skill).map(skill => (<>
							<Avatar
								variant='square'
								src={"img/technologies/" + skill.src}
								alt={skill.name} />
						</>))}
					</AvatarGroup>
				</Stack>
				<Stack alignItems={'center'} sx={{
					width: "50%"
				}}>
					<h5>Projects using {props.skill?.name ?? ""}</h5>
					<Grid container
						alignItems={'center'}
						justifyContent={'center'}
						alignContent={'center'}
						justifyItems={'center'}
						spacing={1}>
						{Project.withSkill(props.skill).map(project => (<>
							<Grid alignContent={'center'}>
								<Button onClick={() => props.projectRefs
									.get(project)?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
									{project.name}
								</Button>
							</Grid>
						</>))}
					</Grid>
				</Stack>
			</Stack >
		</Container >
	</>);
}