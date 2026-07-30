import Grid from '@mui/material/Grid2';
import { Avatar, AvatarGroup, Button, Divider, IconButton, Paper, Stack, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { EmploymentRoleRefs, ProjectRefs, theme } from './App';
import React, { useEffect, useRef, useState } from 'react';
import { EmploymentRole, lastYearInDateRange, Project, shouldDisplaySkill, Skill, SkillCategories, skillImageSrc, skillInitials, sortSkillsByUsage } from './Experience';
import { ArrowBack, FolderOutlined, WorkOutline } from '@mui/icons-material';


export const SkillsCard = (props: {
	projectRefs: ProjectRefs,
	employmentRoleRefs: EmploymentRoleRefs,
	skillsCardRef: React.RefObject<HTMLDivElement>
}) => {
	const [skillOpen, setSkillOpen] = useState<Skill | undefined>();
	const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>();
	const listPanelRef = useRef<HTMLDivElement | null>(null);
	const [listPanelHeight, setListPanelHeight] = useState<number | undefined>();

	useEffect(() => {
		const listPanel = listPanelRef.current;
		if (!listPanel) return;

		const updateHeight = () => setListPanelHeight(listPanel.scrollHeight);
		updateHeight();

		const observer = new ResizeObserver(updateHeight);
		observer.observe(listPanel);
		window.addEventListener("resize", updateHeight);
		return () => {
			observer.disconnect();
			window.removeEventListener("resize", updateHeight);
		};
	}, []);

	return (<>
		<Paper elevation={4} className='skills-card'>
			<Stack textAlign={'center'}
				ref={props.skillsCardRef}
				padding={2}
				spacing={1}
				alignItems={'center'}>
				<h1 className='col'>Skills</h1>
				<Typography>
					Select a skill to see more.
				</Typography>
				{/* <embed width={isSmallScreen ? "80%" : "auto"} height={isSmallScreen ? "80%" : "auto"}
				src="https://leetcard.jacoblin.cool/CallumMackenzie?theme=catppuccinMocha&font=Noto%20Sans%20Georgian&colors=%23232b2b%2C%2345475A%2C%23C3CBCB%2C%23bac2de%2C%2326a69a%2C%23b2dfdb%2C%234db6ac%2C%2300796b" /> */}
				<div
					className='skills-transition-stage'
					style={listPanelHeight === undefined ? undefined : { height: listPanelHeight }}>
					<div
						ref={listPanelRef}
						className={`skills-panel skills-list-panel ${selectedSkill ? 'is-exiting' : 'is-active'}`}>
						<SkillList skillOpen={skillOpen}
							setSkillOpen={setSkillOpen}
							setSelectedSkill={setSelectedSkill} />
					</div>
					<div className={`skills-panel skills-detail-panel ${selectedSkill ? 'is-active' : 'is-entering'}`}>
						<SkillInfoView
							setSkill={setSelectedSkill}
							skill={selectedSkill}
							projectRefs={props.projectRefs}
							employmentRoleRefs={props.employmentRoleRefs} />
					</div>
				</div>
			</Stack>
		</Paper >
	</>);
}

const SkillList = (props: {
	skillOpen: Skill | undefined,
	setSkillOpen: (x: Skill | undefined) => void,
	setSelectedSkill: (x: Skill | undefined) => void,
}) => {
	return (<>
		{SkillCategories.map(skillType => (
			<React.Fragment key={skillType.name}>
				<Divider sx={{ background: 'white', width: '80%' }} />
				<h4>{skillType.name}</h4>
				<Grid container justifyContent={'center'} className='skills-category-grid'>
					{sortSkillsByUsage(skillType.skills.filter(shouldDisplaySkill)).map(skill => (
						<Grid key={skill.name}>
							<Tooltip arrow
								onOpen={() => props.setSkillOpen(skill)}
								onClose={() => props.setSkillOpen(undefined)}
								open={props.skillOpen === skill}
								title={skill.name}>
								<IconButton
									onClick={() => {
										props.setSelectedSkill(skill);
										props.setSkillOpen(undefined);
									}}>
									<Avatar
										className='skill-avatar'
										variant='square'
										alt={skill.name}
										src={skillImageSrc(skill)}
										sx={{ fontSize: 11 }}>
										{skillInitials(skill)}
									</Avatar>
								</IconButton>
							</Tooltip>
						</Grid>
					))}
				</Grid>
			</React.Fragment>))
		}
	</>);
};

const SkillInfoView = (props: {
	skill: Skill | undefined,
	setSkill: (x: Skill | undefined) => void,
	projectRefs: ProjectRefs,
	employmentRoleRefs: EmploymentRoleRefs,
}) => {
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
	const relatedSkillAvatarMax = isDesktop ? 11 : 7;
	const topRelatedSkills = (skills: Array<Skill>) =>
		sortSkillsByUsage(skills.filter(skill => skill !== props.skill && shouldDisplaySkill(skill)));
	const projectsUsingSkill = Project.withSkill(props.skill);
	const rolesUsingSkill = EmploymentRole.withSkill(props.skill);
	const usageItems = rolesUsingSkill
		.map(role => ({
			key: `role-${role.company}-${role.role}`,
			title: role.company,
			subtitle: role.role,
			sortYear: lastYearInDateRange(role.dates),
			icon: <WorkOutline fontSize='small' />,
			relatedSkills: topRelatedSkills(role.skills),
			onClick: () => props.employmentRoleRefs
				.get(role)?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
		}))
		.sort((a, b) => b.sortYear - a.sortYear || a.title.localeCompare(b.title))
		.concat(projectsUsingSkill.map(project => ({
			key: `project-${project.name}`,
			title: project.name,
			subtitle: project.date,
			sortYear: lastYearInDateRange(project.date),
			icon: <FolderOutlined fontSize='small' />,
			relatedSkills: topRelatedSkills(project.skills),
			onClick: () => props.projectRefs
				.get(project)?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
		})).sort((a, b) => b.sortYear - a.sortYear || a.title.localeCompare(b.title)));

	return (<>
		<Stack className='skills-detail-content' spacing={2}>
			<Stack direction='row' alignItems='center' spacing={1} className='skills-detail-header'>
				<Tooltip title='Back' arrow>
					<IconButton onClick={() => props.setSkill(undefined)} aria-label='Back to skills'>
						<ArrowBack />
					</IconButton>
				</Tooltip>
				<Avatar
					className='skill-avatar'
					variant='square'
					src={props.skill ? skillImageSrc(props.skill) : undefined}
					alt={props.skill?.name ?? ""}
					sx={{ fontSize: 11 }}>
					{props.skill ? skillInitials(props.skill) : ""}
				</Avatar>
				<h4>{usageItems.length} Using {props.skill?.name ?? ""}</h4>
			</Stack>
			<Divider sx={{ background: 'white', width: '80%', alignSelf: 'center' }} />
			<Stack className='skill-usage-section' alignItems={'center'} pb={2}>
				<Stack className='skill-usage-list' spacing={1}>
					{usageItems.map(item => (
						<Button
							key={item.key}
							variant='outlined'
							size='small'
							className='skill-usage-link'
							onClick={item.onClick}>
							<span className='skill-usage-icon'>{item.icon}</span>
							<span className='skill-usage-copy'>
								<span>{item.title}</span>
								<small>{item.subtitle}</small>
							</span>
							<AvatarGroup className='skill-usage-related-skills' max={relatedSkillAvatarMax}>
								{item.relatedSkills.map(skill => (
									<Avatar
										key={skill.name}
										className='skill-avatar'
										variant='square'
										src={skillImageSrc(skill)}
										alt={skill.name}
										sx={{ fontSize: 11 }}>
										{skillInitials(skill)}
									</Avatar>
								))}
							</AvatarGroup>
						</Button>
					))}
				</Stack>
			</Stack>
		</Stack>
	</>);
}
