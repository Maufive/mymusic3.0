import styled from "styled-components";

export const Navigation = styled.ul`
	width: 100%;
	list-style: none;
	padding: 0;
	margin: 0;
	margin-bottom: 5rem;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (max-width: 1000px) {
		flex-direction: column;
		width: fit-content;
		> li {
			margin-bottom: 1rem;
		}
	}
`;

export const NavItem = styled.li`
	font-size: 2rem;
	color: ${props => (props.active ? props.theme.green : props.theme.white)};
	border-bottom: ${props =>
		props.active ? `2px solid ${props.theme.green}` : "none"};
	cursor: pointer;
	transition: all 300ms ease-out;

	&:hover {
		transform: translateY(-3px);
		text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
		color: ${props => props.theme.green};
	}
`;
