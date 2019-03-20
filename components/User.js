import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./Header";

const UserLayoutStyle = styled.div`
	display: flex;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

const UserLayout = ({ children, user }) => (
	<UserLayoutStyle>
		<Header user={user} />
		{children}
	</UserLayoutStyle>
);

export default UserLayout;

UserLayout.propTypes = {
	children: PropTypes.object
};

UserLayout.defaultProps = {
	children: {}
};
