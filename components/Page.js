import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { UserConsumer } from "./UserContext";

const theme = {
	oldgreen: "#15BD76",
	green: "#4eb731",
	darkGreen: "#1E7B05",
	red: "#bc1616",
	yellow: "#FFCF44",
	orange: "#e4572e",
	black: "#2E282A",
	grey: "#343434",
	mediumgrey: "#727272",
	lightgrey: "#E1E1E1",
	offWhite: "#f8f8f8",
	white: "#fafafa",
	maxWidth: "1200px",
	mobileBreakpoint: "768px",
	mobileAnimationTime: "200ms",
	bs: "0 5px 24px 0 rgba(0, 0, 0, 0.06)",
	bsHard: "1px 3px 3px 0px rgba(0, 0, 0, 0.2)",
	bRadius: "5px"
};

const StyledPage = styled.div`
	background-color: ${props => props.theme.offWhite};
	color: ${props => props.theme.black};
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
	@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,700');
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif, sans-serif;
		-webkit-font-smoothing: antialiased !important;
		text-shadow:1px 1px 1px 1px rgba(0,0,0,0.005);
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
		line-height: 2;
  }
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<GlobalStyle />
				{this.props.children}
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;