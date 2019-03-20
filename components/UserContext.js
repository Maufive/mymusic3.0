import React, { Component } from "react";
import axios from "axios";

const UserContext = React.createContext();

class UserProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}

	componentDidMount() {
		this.getUser();
	}

	setUser = obj => {
		this.setState({
			user: obj
		});
	};

	getUser = () => {
		// request user
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
