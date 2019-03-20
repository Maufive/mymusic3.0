import React, { Component } from "react";
import axios from "axios";
import {
	OverviewStyles,
	Container,
	Divider,
	UserInfo
} from "../styles/OverviewStyles";
import TopFive from "./TopFiveBlock";
import { Loading } from "./Loading";
import AlbumsOverview from "./AlbumsOverview";

class Overview extends Component {
	state = {
		songs: null,
		artists: null,
		albums: null,
		loading: false
	};

	componentDidMount() {
		this.getData();
	}

	componentDidUpdate(prevProps) {
		if (this.props.user !== prevProps.user) {
			this.getData();
		}
	}

	getSongs = async () => {
		this.setState({ loading: true });
		const username = this.props.user.name;
		axios
			.get(
				`//ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&api_key=${
					process.env.API_KEY
				}&limit=5&period=overall&format=json`
			)
			.then(response => this.setState({ songs: response.data.toptracks.track }))
			.catch(error => console.log(error));
	};

	getArtists = async () => {
		const username = this.props.user.name;
		axios
			.get(
				`//ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=${
					process.env.API_KEY
				}&period=overall&limit=5&format=json`
			)
			.then(response =>
				this.setState({ artists: response.data.topartists.artist })
			);
	};

	getAlbums = async () => {
		const username = this.props.user.name;
		axios
			.get(
				`//ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&api_key=${
					process.env.API_KEY
				}&period=overall&limit=5&format=json`
			)
			.then(
				response => this.setState({ albums: response.data.topalbums.album })
				// this.setState({ albums: response.data.topalbums.album, loading: false })
			);
	};

	getData = async () => {
		const { songs, artists, albums } = this.state;
		await this.getSongs();
		await this.getArtists();
		await this.getAlbums();
		this.setState({ loading: false });
	};

	formatDate = unix => {
		const timestamp = unix;
		// Months array
		const months_arr = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"Novemeber",
			"December"
		];
		const date = new Date(timestamp * 1000);
		const year = date.getFullYear();
		const month = months_arr[date.getMonth()];
		const day = date.getDate();
		const convdataTime = month + " " + day + " " + year;
		return convdataTime;
	};

	render() {
		const { songs, artists, albums, loading } = this.state;
		const { user } = this.props;
		if (loading) return <Loading />;
		if (!loading)
			return (
				<OverviewStyles>
					{user && (
						<UserInfo>
							<h3>
								User: <span>{user.name}</span>
							</h3>
							<h3>
								Total playcount: <span>{user.playcount}</span>
							</h3>
							<h3>
								Member since:{" "}
								<span>{this.formatDate(user.registered.unixtime)}</span>
							</h3>
						</UserInfo>
					)}
					<Container>
						{songs && <TopFive data={songs} title={"Top 5 Songs"} />}
						{songs && artists && <Divider />}
						{artists && <TopFive data={artists} title={"Top 5 Artists"} />}
					</Container>
					{albums && <AlbumsOverview data={albums} />}
				</OverviewStyles>
			);
	}
}

export default Overview;
