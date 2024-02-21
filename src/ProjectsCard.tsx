
import { Box, Divider, ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";
import Paper from "@mui/material/Paper/Paper";

export const ProjectsCard = () => {

	return (<>
		<div className="container p-4 my-3 text-center justify-content-center">
			<Stack sx={{ border: 1, borderColor: 'darkgrey' }} py={1} px={3} borderRadius={1}>
				<div className='row my-2'>
					<h1 className='col' style={{ fontSize: '4em', fontStyle: 'bold' }}>Projects</h1>
				</div>
				<ProjectCard
					name="Exvi Fitness"
					description={`A serverless android and desktop fitness tracking app created with Java, Kotlin and AWS. 
					Features include workout tracking, creation, auto-generation, and friending across devices. Implemented
					my own serialization & data storage system, login system with dynamic salting and hashing, and text-message
					user authentication.`}
					links={[{ link: "https://github.com/CallumMackenzie/exvi-client", name: "Exvi" }]}
					imageBasePath="/img/exvi/"
					images={["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]}
				/>
				<ProjectCard
					name="Virtual Closet"
					description={`A project created with Java & Swing which tracks closet inventory and allows easy searching and organization.
				Created for the CPSC 210 (Software Construction) term project at the University of British Columbia.
				Follows SOLID design principles, has full test coverage, and has UML diagrams.`}
					links={[{ link: "https://github.com/CallumMackenzie/VirtualCloset", name: "Virtual Closet" }]}
					imageBasePath="/img/virtualcloset/"
					images={["home.png", "closets.png", "clothing.png", "outfit.png", "search.png", "package-diagram.png"]}
				/>
				<ProjectCard
					name="3D Rendering Engines"
					description={`A series of 3D rendering engines using primarily OpenGL bindings in various languages such as C++ (CMake), Java, Rust (Desktop & WASM), and TypeScript (WebGL).
				Used PBR techniques, global lights, point lights, specular/diffuse/ambient lighting, and normal mapping.`}
					links={[{ link: "https://github.com/CallumMackenzie/IngeniumLatte", name: "Java" },
					{ link: "https://github.com/CallumMackenzie/kvasir", name: "C++ with physics & multiple platforms" },
					{ link: "https://github.com/CallumMackenzie/Ingenium", name: "C++ 2D & 3D with lua scripting" },
					{ link: "https://github.com/CallumMackenzie/IngeniumWeb", name: "Typescript" },
					{ link: "https://github.com/CallumMackenzie/charengine", name: "Rust" }]}
					imageBasePath="/img/render/"
					images={[{ src: "ingeniumlatte.png", desc: "Java" },
					{ src: "ts.png", desc: "Typescript" },
					{ src: "text.jpeg", desc: "C++ (text rendering)" },
					{ src: "cards.png", desc: "Java with multiple render views" },
					{ src: "browser.png", desc: "Typescript" },
					{ src: "ingenium.png", desc: "C++ (OpenGL)" }]}
				/>
				<ProjectCard
					name="ThinkTECH 2022"
					description={`A business case competition focused on business automation of forms containing sensetive medical data.
					Attended the company summit building and presented in front of over 75 individuals, including clients,
					fellow competitors, and other individuals.
					Placed top 4 of 32 teams, of which there was competetive selection.`}
					links={[]}
					imageBasePath="/img/thinktech/"
					images={["title.png", "impl.png", "dataflow.png"]}
				/>
				<ProjectCard
					name="VitAlert"
					description={`A hackathon project created for NWHacks 2024, a 24 hour hackathon focusing on health. 
					VitAlert enables vitamin deficiency awareness and easy detection.`}
					links={[{ link: "http://vitalert.tech", name: "Live Demo" },
					{ link: "https://github.com/CallumMackenzie/vitalert", name: "GitHub Repository" }]}
					imageBasePath="/img/vitalert/"
					images={["home.png", "login.png", "nutrient.png"]}
				/>
			</Stack>
		</div>
	</>);
}

const ProjectCard = (props: {
	name: string,
	description: string,
	links: Array<{ name: string, link: string }>,
	imageBasePath: string,
	images: Array<{ desc: string, src: string } | string>
}) => {
	return (<>
		<Paper elevation={5} className="row p-3 my-2" >
			<Stack direction={'column'} spacing={2}>
				<h3>{props.name}</h3>
				<p>{props.description}</p>
				{props.links.length !== 0 &&
					<p>See more here: &nbsp;
						{props.links.map((l, i) => (
							<>
								<a href={l.link}>{l.name}</a>
								{i !== props.links.length - 1 ? "," : "."}
								&nbsp;
							</>))}
					</p>}
				{props.images.length !== 0 &&
					<p style={{
						fontSize: 'large'
					}}>Image Gallery</p>}
				{props.images.length !== 0 && <Divider sx={{
					background: "white"
				}} />}
				{props.images.length !== 0 &&
					<ImageList cols={3} variant="masonry">
						{props.images.map((item) => {
							const src = typeof (item) == 'string' ? item : item.src;
							return (
								<ImageListItem key={src}>
									<img src={props.imageBasePath + src}
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