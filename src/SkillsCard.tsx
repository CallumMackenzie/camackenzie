
import { Paper } from '@mui/material';

export const SkillsCard = () => {
	return (<>
		<Paper elevation={4} className='container py-2 px-1 my-5 text-center'>
			<div className='row'>
				<h1 className='col'>Skills</h1>
				<p>I have the following skills acquired from personal projects and school:
				<br /> <br />
				<b>Languages:</b> Java, TypeScript, JavaScript, HTML, CSS, C, C++, Rust, R, Kotlin. 
				<br /> <br />
				<b>Technologies:</b> AWS, Firebase, Node, Maven, Gradle, React, OpenGL, CMake, Make.
				</p>
			</div>
		</Paper>
	</>);
}