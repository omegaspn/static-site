import { createGlobalStyle } from "styled-components";
import { gray } from "../styles";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${gray[300]};
    font-family: ${theme.typography.fontFamily}
  }
`;

export default GlobalStyle;
