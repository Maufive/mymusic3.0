import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Router from "next/router";
import { NavItem } from "../styles/HeaderStyles";

const NavLink = ({ children, user, path }) => {
	const lowercased = "/" + children[1].toLowerCase();
	return (
		<div>
			<Link
				href={{
					pathname: path,
					query: user.name
				}}
			>
				{Router.route === lowercased ? (
					<NavItem active>{children}</NavItem>
				) : (
					<NavItem>{children}</NavItem>
				)}
			</Link>
		</div>
	);
};

export default NavLink;

NavLink.propTypes = {
	user: PropTypes.object,
	children: PropTypes.array,
	path: PropTypes.string
};

NavLink.defaultProps = {
	user: {},
	children: {},
	path: ""
};
