
import { Avatar, AvatarGroup, IconButton, Paper, Stack, Tooltip, useMediaQuery } from '@mui/material';
import { theme } from './App';
import React, { useRef } from 'react';
import { Language, OtherSkill, Technology } from './Experience';

export const SkillsCard = () => {
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	return (<>
		<Paper elevation={4}>
			<Stack textAlign={'center'} padding={2}>
				<h1 className='col'>Skills</h1>
				<Stack direction='column'
					marginBottom={2}
					spacing={2}>
					{[Language.All, Technology.All, OtherSkill.All]
						.map(skillType => (<>
							<Stack direction='row' spacing={1}>
								{skillType.map(skill => (<>
									<Tooltip arrow
										title={skill.name}>
										<IconButton>
											<Avatar
												variant='square'
												alt={skill.name}
												src={"img/technologies/" + skill.src} />
										</IconButton>
									</Tooltip>
								</>))}
							</Stack>
						</>))}
				</Stack>
			</Stack>
		</Paper >
	</>);
}