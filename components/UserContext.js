import React, { Component } from "react";
import Router from "next/router";

const UserContext = React.createContext();

class UserProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}

	setUser = async obj => {
		await this.setState({
			user: obj
		});
		this.redirectUser();
	};

	redirectUser = async () => {
		const { user } = this.state;
		Router.push({
			pathname: "/overview",
			query: user.name
		});
	};

	render() {
		return (
			<UserContext.Provider
				value={{
					user: this.state.user,
					setUser: this.setUser
				}}
			>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}

const UserConsumer = UserContext.Consumer;

export default UserProvider;
export { UserConsumer };
