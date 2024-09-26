
import { Container, Divider, Stack, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper/Paper";
import { theme } from "./App";
import { Masonry } from "@mui/lab";
import { Project } from "./Experience";

export const ProjectsCard = () => {

	return (<>
		<div className="container p-4 my-3 text-center justify-content-center">
			<Stack py={1}>
				<div className='row my-2'>
					<h1 className='col' style={{ fontSize: '4em', fontStyle: 'bold' }}>Projects</h1>
				</div>
				<ProjectCard project={Project.Drone} />
				<ProjectCard project={Project.Vitalert} />
				<ProjectCard project={Project.VirtualCloset} />
				<ProjectCard project={Project.ClassificationOfHeartDisease} />
				<ProjectCard project={Project.ThinkTech} />
				<ProjectCard project={Project.ExviFitness} />
				<ProjectCard project={Project.Nexus} />
				<ProjectCard project={Project.RenderingEngines} />
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
					"&::before, &::after": {
						borderColor: "primary.light",
						opacity: 0.6
					},
				}}>{props.project.date}</Divider>
				<ul style={{ textAlign: 'left' }}>
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
				{props.project.images.length !== 0 && <Divider sx={{
					"&::before, &::after": {
						borderColor: "primary.light",
						opacity: 0.6
					},
				}} >{"Image Gallery"}</Divider>}
				{props.project.images.length !== 0 &&
					<Masonry columns={isSmallScreen ? 1 : isMediumScreen ? 2 : 3}>
						{props.project.images.map((item) => {
							const src = props.project.imageBasePath +
								(typeof (item) == 'string' ? item : item.src);
							return (<div key={src}>
								{
									typeof (item) != 'string' &&
									<Container>{item.desc}</Container>
								}
								<img
									style={{
										width: "100%",
										display: "block"
									}}
									src={src}
									srcSet={src}
									alt={props.project.name}
									loading="lazy" />
							</div>);
						})}
					</Masonry>}
			</Stack>
		</Paper>
	</>);
};