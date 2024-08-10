
import { Box, Divider, ImageList, ImageListItem, ImageListItemBar, Stack, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper/Paper";
import { theme } from "./App";

type Project = {
	name: string,
	date: string,
	description: Array<string>,
	links: Array<{ name: string, link: string }>,
	imageBasePath: string,
	images: Array<{ desc: string, src: string } | string>
}

export const ProjectsCard = () => {

	return (<>
		<div className="container p-4 my-3 text-center justify-content-center">
			<Stack py={1}>
				<div className='row my-2'>
					<h1 className='col' style={{ fontSize: '4em', fontStyle: 'bold' }}>Projects</h1>
				</div>
				<ProjectCard project={Drone} />
				<ProjectCard project={Vitalert} />
				<ProjectCard project={VirtualCloset} />
				<ProjectCard project={ThinkTech} />
				<ProjectCard project={ExviFitness} />
				<ProjectCard project={RenderingEngines} />
			</Stack>
		</div>
	</>);
}

const ProjectCard = (props: {
	project: Project
}) => {
	const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"))
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (<>
		<Paper elevation={5} className="row py-3 px-1 my-2" >
			<Stack direction={'column'} spacing={2}>
				<h3>{props.project.name}</h3>
				<Divider sx={{
					background: 'white'
				}} />
				<ul style={{ textAlign: 'center' }}>
					{props.project.description.map(pt => (
						<>
							<li>{pt}</li>
						</>
					))}
				</ul>
				{props.project.links.length !== 0 &&
					<p>See more here: &nbsp;
						{props.project.links.map((l, i) => (
							<>
								<a href={l.link}>{l.name}</a>
								{i !== props.project.links.length - 1 ? "," : "."}
								&nbsp;
							</>))}
					</p>}
				{props.project.images.length !== 0 &&
					<p style={{
						fontSize: 'large'
					}}>Image Gallery</p>}
				{props.project.images.length !== 0 && <Divider sx={{
					background: "white"
				}} />}
				{props.project.images.length !== 0 &&
					<ImageList cols={isSmallScreen ? 1 : isMediumScreen ? 2 : 3} variant="masonry">
						{props.project.images.map((item) => {
							const src = typeof (item) == 'string' ? item : item.src;
							return (
								<ImageListItem key={src}>
									<img src={props.project.imageBasePath + src}
										alt={"Project Demo Image"}
										loading="lazy" />
									{typeof (item) != 'string' &&
										<ImageListItemBar position="below" title={item.desc} />}
								</ImageListItem>
							);
						})}
					</ImageList>}
			</Stack>
		</Paper>
	</>);
};

// PROJECTS

const Drone: Project = {
	name: "Drone from Scratch",
	date: "Apr 2022 - Current",
	description: [
		"Utilized a variety of low-level communication protocols such as SPI, PWM, I2C",
		"Researched components based on electrical requirements (FPGA vs microprocessor, voltages, PWM channels, camera interface)",
		"Designed custom chassis and elecrical diagram with Autodesk Fusion 360",
		"Ran no-std Rust on microprocessors for memory safety and speed",
		"Designing flight controller and remote-drone commincation protocols",
		"Creating IOS app to connect via bluetooth to ground station which communicates with drone",
		"Read a variety of sensor feeds on an embedded device (accelerometer, barometer, magnetometer, camera, ultrasonic)",
	],
	links: [{ link: "https://a360.co/3AnnJ8f", name: "CAD Model Link" },
	{ link: "https://github.com/CallumMackenzie/rc-plane", name: "GitHub Repository" }],
	imageBasePath: "/img/drone/",
	images: ["inside top.jpeg",
		"chassis.jpeg",
		"drone realistic angle.png",
		"drone realistic top.png",
		"circuit overview.png",
		"drone realistic bottom.png",
	]
}

const Vitalert: Project = {
	name: "VitAlert",
	date: "Jan 2024",
	description: [
		"Submission for NWHacks 2024, a 24 hour hackathon focusing on health",
		"Worked on collaborative coding skills with 3 group members",
		"Developed React skills with a responsive UI that adapts to screen size",
		"Utilized R for webscraping and data tidying",
		"Linked in APIs from several services"
	],
	links: [{ link: "http://vitalert.tech", name: "Live Demo" },
	{ link: "https://github.com/CallumMackenzie/vitalert", name: "GitHub Repository" }],
	imageBasePath: "/img/vitalert/",
	images: ["home.png", "login.png", "nutrient.png"]
}

const VirtualCloset: Project = {
	name: "Virtual Closet",
	date: "Jan - Apr 2023",
	description: [
		"Users organize closets, individual pieces of clothing, and outfits to track their style",
		"Practiced imperative UI development with Java Swing",
		"Leveraged Java's inherant OOP to enforce SOLID design principles",
		"Has 100% model LOC test coverage to ensure a bug-free user experience",
		"Created UML diagrams for both the model and user interface class structures",
		"Term project for CPSC 210 (Software Construction) at UBC"
	],
	links: [{ link: "https://github.com/CallumMackenzie/VirtualCloset", name: "Virtual Closet" }],
	imageBasePath: "/img/virtualcloset/",
	images: ["home.png", "closets.png", "clothing.png", "outfit.png", "search.png", "package-diagram.png"]
}

const ThinkTech: Project = {
	name: "ThinkTECH 2022",
	date: "Sep - Nov 2022",
	description: [
		"Created for the Deloitte ThinkTECH business case competition",
		"Improved technical communication by presenting to 75+ individuals at the Deloitte summit building in Vancouver",
		"Safely managed sensetive medical forms with cryptographic principles",
		"Integrated online form APIs to track information",
		"Set up webhooks to quickly notify and store input data",
		"Placed top 4 of 32 teams, of which there was competitive participant selection"
	],
	links: [],
	imageBasePath: "/img/thinktech/",
	images: ["title.png", "impl.png", "dataflow.png"]
}

const ExviFitness: Project = {
	name: "Exvi Fitness",
	date: "Dec 2021 - Jun 2022",
	description: [
		"Serverless backend android and desktop fitness tracking app",
		"Used AWS for hosting, database, cloud functions, and a RESTful API",
		"Created user system from scratc with dynamic salting and hashing, and two factor authentication",
		"Implemented custom serialization scheme for quick and accurate data saving",
		"Leveraged Java and Kotlin together via JVM for cloud and client code",
	],
	links: [{ link: "https://github.com/CallumMackenzie/exvi-client", name: "Exvi" }],
	imageBasePath: "/img/exvi/",
	images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]
}

const RenderingEngines: Project = {
	name: "Rendering Engines",
	date: "Feb - Dec 2021",
	description: [
		"A series of 3D & 2D rendering engines created from scratch",
		"Implemented the entire render pipeline to draw to a console window with ASCII",
		"Used OpenGL bindings in various languages to utilize GPU power",
		"Implemented in C++ (with CMake), Java, Rust (Desktop & WASM), and Typescript (WebGL)",
		"Used PBR techniques, a variety of light types, specular/diffuse/ambient lighting, and normal mapping",
		"Implemented linear algebra libraries for quick transformation calculations"
	],
	links: [{ link: "https://github.com/CallumMackenzie/IngeniumLatte", name: "Java" },
	{ link: "https://github.com/CallumMackenzie/kvasir", name: "C++ with physics & multiple platforms" },
	{ link: "https://github.com/CallumMackenzie/Ingenium", name: "C++ 2D & 3D with lua scripting" },
	{ link: "https://github.com/CallumMackenzie/IngeniumWeb", name: "Typescript" },
	{ link: "https://github.com/CallumMackenzie/charengine", name: "Rust" }],
	imageBasePath: "/img/render/",
	images: [{ src: "ingeniumlatte.png", desc: "Java" },
	{ src: "ts.png", desc: "Typescript" },
	{ src: "text.jpeg", desc: "C++ (text rendering)" },
	{ src: "cards.png", desc: "Java with multiple render views" },
	{ src: "browser.png", desc: "Typescript" },
	{ src: "ingenium.png", desc: "C++ (OpenGL)" }]
}