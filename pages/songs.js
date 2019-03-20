import React from "react";
import UserLayout from "../components/User";
import { UserConsumer } from "../components/UserContext";
import Songs from "../components/Songs";

const SongsPage = () => (
	<UserConsumer>
		{({ user }) => (
			<UserLayout>
				<Songs user={user} />
			</UserLayout>
		)}
	</UserConsumer>
);

export default SongsPage;
