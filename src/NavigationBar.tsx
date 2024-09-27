import { Menu } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import React from "react";


export const NavigationBar = (props: {
	aboutCardRef: React.RefObject<HTMLDivElement>,
	skillsCardRef: React.RefObject<HTMLDivElement>,
	titleCardRef: React.RefObject<HTMLDivElement>,
	projectCardRef: React.RefObject<HTMLDivElement>,
}) => {
	const scrollToSmooth = (ref: React.RefObject<HTMLDivElement>) =>
		ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

	const [mobileOpen, setMobileOpen] = React.useState(false);
	const container = document.body;


	const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

	const navItems = [{ name: "Home", onClick: () => scrollToSmooth(props.titleCardRef) },
	{ name: "About", onClick: () => scrollToSmooth(props.aboutCardRef) },
	{ name: "Skills", onClick: () => scrollToSmooth(props.skillsCardRef) },
	{ name: "Projects", onClick: () => scrollToSmooth(props.projectCardRef) }];

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				Callum Mackenzie
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.name} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }} onClick={item.onClick}>
							<ListItemText primary={item.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (<>
		<AppBar position='sticky' component={'nav'}>
			<Container maxWidth='xl' sx={{
				bgcolor: 'background.paper'
			}}>
				<Toolbar disableGutters sx={{
					bgcolor: 'background.paper',
				}}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<Menu />
					</IconButton>
					<Avatar src="logo512.png" sx={{ mr: 2 }} />
					<Typography variant="h6" sx={{ mr: 2 }}>
						Callum Mackenzie
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map(x => (<Button onClick={x.onClick}>{x.name}</Button>))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar >
		<nav>
			<Drawer
				container={container}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 150 },
				}}
			>
				{drawer}
			</Drawer>
		</nav>
	</>);
}