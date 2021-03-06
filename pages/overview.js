import React from "react";
import UserLayout from "../components/User";
import Overview from "../components/Overview";
import { UserConsumer } from "../components/UserContext";

const OverviewPage = () => (
	<UserConsumer>
		{({ user }) => (
			<UserLayout>
				<Overview user={user} />
			</UserLayout>
		)}
	</UserConsumer>
);

export default OverviewPage;
