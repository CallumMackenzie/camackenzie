import React from 'react';

import { Container, Paper } from '@mui/material';

export const InfoCard = () => {
	return (<>
		<Paper elevation={4} className='container py-2 px-3 my-3 text-center'>
			<div className='row'>
				<h1 className='col'>About</h1>
			</div>
			<div className='row py-4'>
				<p></p>
			</div>
		</Paper>
	</>);
};