
import Paper from "@mui/material/Paper/Paper";

export const ProjectsCard = () => {

	return (<>
		<div className="container p-4 my-3 text-center justify-content-center">
			<div className='row my-2'>
				<h1 className='col'>Projects</h1>
			</div>
			<Paper elevation={5} className="row p-3 my-2">
				<h3>Exvi Fitness</h3>
				<p>A serverless android and desktop fitness tracking app created with Java, Kotlin and AWS.</p>
				<a href="https://github.com/CallumMackenzie/exvi-client">See more here.</a>
			</Paper>
			<Paper elevation={5} className="row p-3 my-2">
				<h3>Virtual Closet</h3>
				<p>A project created with Java & Swing which tracks closet inventory and allows easy searching and organization.</p>
				<a href="https://github.com/CallumMackenzie/VirtualCloset">See more here.</a>
			</Paper>
			<Paper elevation={5} className="row p-3 my-2">
				<h3>3D Rendering Engines</h3>
				<p>A series of 3D rendering engines using primarily OpenGL bindings in various languages such as C++, Java, Rust, and TypeScript.
					<br />
					See the following: <a href="https://github.com/CallumMackenzie/IngeniumLatte">Java</a>, <a href="https://github.com/CallumMackenzie/kvasir">C++</a>, <a href="https://github.com/CallumMackenzie/IngeniumWeb">TypeScript</a>, <a href="https://github.com/CallumMackenzie/charengine">Rust</a>.
				</p>
			</Paper>
			<Paper elevation={5} className="row p-3 my-2">
				<h3>ThinkTECH 2022</h3>
				<p>A business case competition focused on business automation of forms containing sensetive medical data.
					Attended the company summit building and presented in front of over 75 individuals, including clients,
					fellow competitors, and other individuals.
					Placed top 4 of 32 teams, of which there was competetive selection.
				</p>
			</Paper>
		</div>
	</>);
}