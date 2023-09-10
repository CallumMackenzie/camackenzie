import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from "./App";

export const TitleCard = () => {
	const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (<>
		<div className='title container p-3'>
			<div className='row justify-content-center px-2'>
				<div className="col-7 text-center mx-auto">
					<h1 className='display-1'>
						Callum Mackenzie
					</h1>
					<p className='h4'>
						Second Year Computer Science & Statistics Major at the University of British Columbia
					</p>
				</div>
				<div className={(smallScreen ? "col-9" : "col-5")}>
					<img className='img-fluid mx-auto px-5' alt='Callum Mackenzie'
						src="img/callum-mackenzie.png" />
				</div>
			</div>
		</div>
	</>);
};