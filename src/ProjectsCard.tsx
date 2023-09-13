
import Paper from "@mui/material/Paper/Paper";

export const ProjectsCard = () => {

	return (<>
		<Paper elevation={3} className="container px-3 my-3 py-3 text-center">
			<div className='row my-2'>
				<h1 className='col'>Projects</h1>
			</div>
			<div className="row">
				<Paper elevation={5} className="col container px-2 m-2">
					<div className='row'>
						<h3>Exvi Fitness</h3>
					</div>
					<div className='row'>
						<p>DESCRIPTION</p>
					</div>
				</Paper>
				<Paper elevation={5} className="col container px-2 m-2">
					<div className='row'>
						<h3>Virtual Closet</h3>
					</div>
					<div className='row'>
						<p>DESCRIPTION</p>
					</div>
				</Paper>
				<Paper elevation={5} className="col container px-2 m-2">
					<div className='row'>
						<h3>3D Rendering Engines</h3>
					</div>
					<div className='row'>
						<p>DESCRIPTION</p>
					</div>
				</Paper>
				<Paper elevation={5} className="col container px-2 m-2">
					<div className='row'>
						<h3>ThinkTECH 2022</h3>
					</div>
					<div className='row'>
						<p>DESCRIPTION</p>
					</div>
				</Paper>
			</div>
		</Paper>
	</>);
}