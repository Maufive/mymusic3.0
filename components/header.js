import React from "react";
import { useSpring, config } from "react-spring";
import { HeaderStyles, Nav } from "../styles/HeaderStyles";
import NavLink from "./NavLink";
import StarIcon from "../svg/star.svg";
import TunesIcon from "../svg/tunes.svg";
import ArtistIcon from "../svg/users.svg";
import AlbumIcon from "../svg/disc.svg";

const Header = ({ user }) => {
	const props = useSpring({
		opacity: 1,
		transform: "translateX(0px)",
		from: { opacity: 0, transform: "translateX(-30px)" },
		config: config.wobbly
	});

	return (
		<HeaderStyles>
			<Nav>
				<NavLink path="/overview" user={user}>
					<StarIcon />
					Overview
				</NavLink>
				<NavLink path="/songs" user={user}>
					<TunesIcon />
					Songs
				</NavLink>
				<NavLink path="/artists" user={user}>
					<ArtistIcon />
					Artists
				</NavLink>
				<NavLink path="/albums" user={user}>
					<AlbumIcon />
					Albums
				</NavLink>
			</Nav>
		</HeaderStyles>
	);
};

export default Header;
