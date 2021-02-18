import React from "react";
import { Link, PageProps } from "gatsby";
import {
	AppBar,
	Toolbar,
	Button,
	Typography,
	IconButton,
	CardActionArea,
	Card,
	CardContent,
} from "@material-ui/core";
import { TABS } from "../constants";
import MenuIcon from "@material-ui/icons/Menu";
import GlobalStyle from "../styles/GlobalStyle";
import { StyledCardMedia } from "./styled";

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
			<Card>
				<CardActionArea>
					<StyledCardMedia
						image="https://us-fbcloud.net/wb/data/912/912560-img.rg6cxm.5p.jpg"
						title="Contemplative Reptile"
					/>
					<CardContent>a;sldkfja;sldkfj</CardContent>
				</CardActionArea>
			</Card>
			<Button variant="contained" color="secondary">
				TEST BUTTON
			</Button>
		</div>
	);
}
