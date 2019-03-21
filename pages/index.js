import React from "react";
import { useSpring, config } from "react-spring";
import {
	IndexStyles,
	Title,
	BrowserContainer,
	Browser
} from "../styles/IndexStyles";

const IndexPage = ({}) => {
	const spring = useSpring({
		config: config.wobbly,
		opacity: 1,
		transform: "translateY(0px)",
		from: { opacity: 0, transform: "translateY(100px)" }
	});
	return (
		<IndexStyles>
			<Title style={spring}>Welcome to mymusic!</Title>
			<p>
				Use the searchbar in the top right to search for your LastFM username!
			</p>
			<BrowserContainer>
				<Browser>
					<span />
					<span />
					<span />
				</Browser>
				<img
					src="https://res.cloudinary.com/dcgb0fhog/image/upload/v1553126008/mymusic_printscreen.png"
					alt=""
				/>
			</BrowserContainer>
		</IndexStyles>
	);
};

export default IndexPage;
