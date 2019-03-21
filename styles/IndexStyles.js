import styled from "styled-components";
import { animated } from "react-spring";

export const IndexStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const Title = styled(animated.h1)`
	font-family: "Sarala";
	font-weight: 700;
	font-size: 3rem;
	text-align: center;
`;

export const Browser = styled.div`
	width: 100%;
	border-radius: 5px 5px 0 0;
	background: #bbb;
	/* background: ${props => props.theme.grey}; */
	display: flex;
	padding: 5px 10px;

	> span {
		height: 10px;
		width: 10px;
		border-radius: 50%;
		display: inline-block;
		margin-right: 5px;
		&:nth-child(1) {
			background: #EC594A;
		}
		&:nth-child(2) {
			background: #FDD700;
		}
		&:nth-child(3) {
			background: #5ABF5A;
			/* background: ${props => props.theme.green}; */
		}
	}
`;

export const BrowserContainer = styled.div`
	img {
		border: 2px solid #bbb;
		max-width: 600px;
	}

	@media (max-width: 600px) {
		img {
			max-width: 100%;
		}
	}
`;
