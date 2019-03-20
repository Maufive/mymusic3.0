import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Jumbotron from "../components/Jumbotron";

const theme = {
	green: "#1EB97F",
	white: "#eee",
	black: "#282828",
	darkGrey: "#3E3E3E",
	grey: "#828282",
	lightGrey: "#e1e1e1",
	maxWidth: "1200px",
	mobileBreakpoint: "768px",
	animationTime: "200ms",
	shadow: "0px 5px 5px rgba(0, 0, 0, 0.2)"
};

const StyledPage = styled.div`
	color: ${props => props.theme.white};
	min-height: 100vh;
	width: 100%;
	padding: 0rem 5rem 10rem 5rem;

	@media (max-width: 1000px) {
		padding: 2rem 1rem;
	}
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Sarala|Lato:700|Raleway');

  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: "Lato", Arial, Helvetica, sans-serif, sans-serif;
		-webkit-font-smoothing: antialiased !important;
    text-shadow:1px 1px 1px 1px rgba(0,0,0,0.005);
    padding: 0;
    margin: 0;
    background: linear-gradient(180deg, #4B6CB7 0%, #182848 100%);
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

  h1, h2, h3, h4 {
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h1 {
    font-family: "Lato" !important;
  }

  h2, h3 {
    font-family: "Sarala" !important;
  }

  a, a:visited {
    color: ${props => props.theme.white};
    text-decoration: none;
  }

  a {
    transition: all 300ms ease-out;
  }

  a:hover {
    color: ${props => props.theme.green};
  }
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<GlobalStyle />
					<Jumbotron setUser={this.props.setUser} />
					{/* <Jumbotron setUser={setUser} /> */}
					{this.props.children}
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
