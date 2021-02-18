import React from "react";
import { Link, PageProps } from "gatsby";
import {
	AppBar,
	Toolbar,
	Button,
	Typography,
	IconButton,
} from "@material-ui/core";
import { TABS } from "../constants";
import MenuIcon from "@material-ui/icons/Menu";
import GlobalStyle from "../styles/GlobalStyle";

export default function RootPage(props: PageProps) {
	return (
		<div>
			<GlobalStyle />
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					{TABS.map((tab, index) => (
						<Link to={tab.url}>
							<Typography key={index}>{tab.name}</Typography>
						</Link>
					))}
				</Toolbar>
			</AppBar>
			<Button variant="contained" color="secondary">
				TEST BUTTON
			</Button>
		</div>
	);
}
