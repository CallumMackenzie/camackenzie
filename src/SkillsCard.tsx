import Grid from '@mui/material/Grid2';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, AvatarGroup, Button, Container, Divider, IconButton, Paper, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { ProjectRefs, theme } from './App';
import React, { useState } from 'react';
import { Language, OtherSkill, Project, Skill, Technology } from './Experience';
import { ExpandMore } from '@mui/icons-material';


export const SkillsCard = (props: {
	projectRefs: ProjectRefs,
	skillsCardRef: React.RefObject<HTMLDivElement>
}) => {
	const [skillOpen, setSkillOpen] = useState<Skill | undefined>();
	const [lastSelectedSkill, setLastSelectedSkillInternal] = useState<Skill | undefined>();
	const [expanded, setExpanded] = useState(false);

	const setLastSelectedSkill = (x: Skill | undefined) => {
		const setSkillNoTimeout = (x: Skill | undefined) => {
			setLastSelectedSkillInternal(x);
			setExpanded(x !== undefined);
		};

		if (x !== lastSelectedSkill && lastSelectedSkill !== undefined && x !== undefined) {
			setSkillNoTimeout(undefined);
			setTimeout(() => {
				setSkillNoTimeout(x);
			}, 200);
		} else {
			setSkillNoTimeout(x);
		}
	}

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
				<embed src="https://leetcard.jacoblin.cool/CallumMackenzie?theme=catppuccinMocha&font=Noto%20Sans%20Georgian&colors=%23232b2b%2C%2345475A%2C%23C3CBCB%2C%23bac2de%2C%2326a69a%2C%23b2dfdb%2C%234db6ac%2C%2300796b"/>
				<SkillList skillOpen={skillOpen}
					setSkillOpen={setSkillOpen}
					lastSelectedSkill={lastSelectedSkill}
					setLastSelectedSkill={setLastSelectedSkill} />
				<Divider sx={{ background: 'white', width: '80%' }} />
				<SkillInfoView
					setSkill={setLastSelectedSkill}
					expanded={expanded}
					setExpanded={setExpanded}
					skill={lastSelectedSkill}
					projectRefs={props.projectRefs} />
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
	setSkill: (x: Skill | undefined) => void,
	projectRefs: ProjectRefs,
	expanded: boolean,
	setExpanded: (x: boolean) => void
}) => {
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMedScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (<>
		<Container>
			<Accordion expanded={props.expanded}
				disabled={props.skill === undefined}
				onChange={x => {
					if (props.expanded)
						props.setSkill(undefined);
					props.setExpanded(!props.expanded);
				}}>
				<AccordionSummary
					expandIcon={<ExpandMore sx={{ color: 'white' }} />}
					aria-controls="panel1-content"
					id="panel1-header">
					Select a skill above to see more.
				</AccordionSummary>
				<AccordionDetails>
					<Stack
						sx={{
							transition: "opacity 0.5s",
							opacity: props.skill === undefined ? 0 : 1
						}}
						pb={2}
						justifyContent={'center'}
						justifyItems={'center'}
						alignItems={'center'}
						spacing={2}
						direction={isSmallScreen ? 'column' : 'row'}>
						<Stack alignItems={'center'} sx={{
							width: "50%"
						}}>
							<h5>Skills used with {props.skill?.name ?? ""}</h5>
							<AvatarGroup max={isSmallScreen ? 7 : isMedScreen ? 8 : 11}>
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
				</AccordionDetails>
			</Accordion>
		</Container >
	</>);
}