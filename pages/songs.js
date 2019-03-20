import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/index';
import UserLayout from '../layout/User';
import SEO from '../components/seo';
import Songs from '../components/songs';

const SongsPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Songs" keywords={['gatsby', 'application', 'react']} />
    <UserLayout location={location} user={location.state.user}>
      {/* <Songs user={location.state.user} /> */}
    </UserLayout>
  </Layout>
);

export default SongsPage;

SongsPage.propTypes = {
  location: PropTypes.object,
};

SongsPage.defaultProps = {
  location: {},
};
