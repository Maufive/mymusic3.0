import React from "react";
import UserLayout from "../components/User";
import Artists from "../components/Artists";
import { UserConsumer } from "../components/UserContext";

const ArtistsPage = () => (
	<UserConsumer>
		{({ user }) => (
			<UserLayout>
				<Artists user={user} />
			</UserLayout>
		)}
	</UserConsumer>
);

export default ArtistsPage;
