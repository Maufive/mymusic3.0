import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";
import {
	Searchform,
	JumbotronStyles,
	Searchbutton
} from "../styles/JumbotronStyles";
import SearchIcon from "../svg/search.svg";
import HeadphonesIcon from "../svg/headphones.svg";

class Jumbotron extends Component {
	state = {
		search: ""
		// user: null // <--  Behövs ens denna när jag använder context?
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	searchUser = e => {
		const { search } = this.state;
		e.preventDefault();
		axios
			.get(
				`//ws.audioscrobbler.com//2.0/?method=user.getinfo&user=${
					this.state.search
				}&api_key=${process.env.API_KEY}&format=json`
			)
			.then(response => {
				const { user } = response.data;
				this.setState({ search: "" });
				this.props.setUser(user);
			})
			.catch(error => console.log(error));
	};

	render() {
		const { search } = this.state;
		return (
			<JumbotronStyles>
				<div>
					<div>
						<Link href="/">
							<span>
								<HeadphonesIcon /> <h1>mymusic</h1>
							</span>
						</Link>
					</div>
					<Searchform onSubmit={this.searchUser}>
						<div>
							<input
								type="text"
								name="search"
								id="search"
								required
								value={search}
								onChange={this.handleChange}
								required
							/>
							<label htmlFor="search">Search...</label>
						</div>
						<Searchbutton primary type="submit">
							<SearchIcon />
						</Searchbutton>
					</Searchform>
				</div>
			</JumbotronStyles>
		);
	}
}

export default Jumbotron;
