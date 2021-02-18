import { Link, PageProps } from "gatsby";
import React from "react";
import {
	AppBar,
	Toolbar,
	Button,
	Typography,
	IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { TABS } from "../constants";
import GlobalStyle from "../styles/GlobalStyle";
import Card from "../components/Card";
import { CardContainer } from "./styled";

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
						<Link to={tab.url} key={index}>
							<Typography>{tab.name}</Typography>
						</Link>
					))}
				</Toolbar>
			</AppBar>

			<CardContainer>
				<Card title="cardTitle" date="" desc="cardDesc" />
				<Card title="cardTitle" date="" desc="cardDesc" />
				<Card title="cardTitle" date="" desc="cardDesc" />
			</CardContainer>
			<Button variant="contained" color="secondary">
				TEST BUTTON
			</Button>
		</div>
	);
}
