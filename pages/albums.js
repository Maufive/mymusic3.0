import React from "react";
import { UserConsumer } from "../components/UserContext";
import UserLayout from "../components/User";
import Albums from "../components/Albums";

const AlbumsPage = () => (
	<UserConsumer>
		{({ user }) => (
			<UserLayout>
				<Albums user={user} />
			</UserLayout>
		)}
	</UserConsumer>
);

export default AlbumsPage;
