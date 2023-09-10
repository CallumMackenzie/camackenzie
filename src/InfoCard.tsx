import React from 'react';

import { Container, Paper } from '@mui/material';

export const InfoCard = () => {
	return (<>
		<Container className='container'>
			<Paper elevation={4} className='container py-2 px-3 my-3'>
				<h2 className='display-4 text-center'>
					About
				</h2>
				<p>
					ABOUT HERE
				</p>
			</Paper>
		</Container>
	</>);
};