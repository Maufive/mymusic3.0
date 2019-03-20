import React from "react";
import { useSpring, config } from "react-spring";
import { IndexStyles, Title } from "../styles/IndexStyles";
import { UserConsumer } from "../components/UserContext";

const IndexPage = ({}) => {
	const spring = useSpring({
		config: config.wobbly,
		opacity: 1,
		transform: "translateY(0px)",
		from: { opacity: 0, transform: "translateY(100px)" }
	});
	return (
		<UserConsumer>
			{({ user }) => {
				return (
					<IndexStyles>
						<Title style={spring}>Welcome to mymusic, {user.name}!</Title>
					</IndexStyles>
				);
			}}
		</UserConsumer>
	);
};

export default IndexPage;
