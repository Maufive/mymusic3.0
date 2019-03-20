import React from "react";
import { useSpring, config } from "react-spring";
import { IndexStyles, Title } from "../styles/IndexStyles";
import { UserConsumer } from "../components/UserContext";
import UserLayout from "../components/User";
import Overview from "../components/Overview";

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
				if (user) {
					return (
						<UserLayout user={user}>
							<Overview user={user} />
						</UserLayout>
					);
				} else {
					return (
						<IndexStyles>
							<Title style={spring}>Welcome to mymusic!</Title>
						</IndexStyles>
					);
				}
			}}
		</UserConsumer>
	);
};

export default IndexPage;
