import { CardMedia } from "@material-ui/core";
import styled from "styled-components";

export const StyledCardMedia = styled(CardMedia)`
	height: 150px;
`;

export const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, auto);
`;
