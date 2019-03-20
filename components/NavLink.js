import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { NavItem } from "../styles/HeaderStyles";

const NavLink = ({ children, user, path }) => {
	return (
		<div>
			<Link
				href={{
					pathname: path,
					query: user
				}}
			>
				<NavItem>{children}</NavItem>
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
