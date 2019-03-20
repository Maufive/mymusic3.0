import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/index';
import UserLayout from '../layout/User';
import SEO from '../components/seo';
import Artists from '../components/artists';
import { UserConsumer } from '../components/UserProvider';

const ArtistsPage = ({ location }) => (
  <Layout>
    <SEO title="Artists" keywords={['artists', ' annat', 'mer keywords']} />
    <UserConsumer>
      {({ user }) => (
        <UserLayout location={location} user={user}>
          <Artists user={user} />
          {/* <Artists user={location.state.user} context={user} /> */}
        </UserLayout>
      )}
    </UserConsumer>
  </Layout>
);

export default ArtistsPage;

ArtistsPage.propTypes = {
  location: PropTypes.object,
};

ArtistsPage.defaultProps = {
  location: {},
};
