import App, { Container } from "next/app";
import UserProvider, { UserConsumer } from "../components/UserContext";
import Page from "../components/Page";

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		pageProps.query = ctx.query;
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<UserProvider>
					<UserConsumer>
						{({ setUser, user }) => (
							<Page setUser={setUser}>
								<Component user={user} {...pageProps} />
							</Page>
						)}
					</UserConsumer>
				</UserProvider>
			</Container>
		);
	}
}

export default MyApp;
