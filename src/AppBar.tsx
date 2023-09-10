
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Box, IconButton, Tooltip } from '@mui/material';

const openGithub = () => {
	window.open("https://github.com/CallumMackenzie");
};
const openLinkedin = () => {
	window.open("https://www.linkedin.com/in/callum-mackenzie-704854212/");
};

export const SiteAppBar = () => {
	return (<>
		<AppBar position='static'>
			<Toolbar variant="dense">
				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title="Github">
						<IconButton onClick={openGithub}>
							<Avatar alt="Github" src="/img/github-logo.png" />
						</IconButton>
					</Tooltip>
					<Tooltip title="Linkedin">
						<IconButton onClick={openLinkedin}>
							<Avatar alt="Linkedin" variant="rounded" src="/img/linkedin-logo.png" />
						</IconButton>
					</Tooltip>
				</Box>
			</Toolbar>
		</AppBar>
	</>);
};