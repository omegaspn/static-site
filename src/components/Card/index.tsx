import { Card as MCard, CardActionArea, CardContent } from "@material-ui/core";
import React from "react";
import { StyledCardMedia } from "../../pages/styled";

type CardProps = {
	title: string;
	date: string;
	desc: string;
};

function Card({ title, _, desc }: CardProps) {
	return (
		<MCard>
			<CardActionArea>
				<StyledCardMedia
					image="https://us-fbcloud.net/wb/data/912/912560-img.rg6cxm.5p.jpg"
					title="Contemplative Reptile"
				/>

				<CardContent>
					<div className="font-bold">{title}</div>
					<div>{desc}</div>
				</CardContent>
			</CardActionArea>
		</MCard>
	);
}

export default Card;
