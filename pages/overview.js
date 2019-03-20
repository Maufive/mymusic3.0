import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/index';
import UserLayout from '../layout/User';
import SEO from '../components/seo';
import Overview from '../components/overview';
import UserProvider, { UserConsumer } from '../components/UserProvider';

const OverviewPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Hem" keywords={['gatsby', 'application', 'react']} />
    <UserConsumer>
      {({ user }) => (
        <UserLayout location={location}>
          {/* <Overview user={location.state.user} context={user} /> */}
          <Overview user={user} />
        </UserLayout>
      )}
    </UserConsumer>
  </Layout>
);

export default OverviewPage;

OverviewPage.propTypes = {
  location: PropTypes.object,
};

OverviewPage.defaultProps = {
  location: {},
};

// location.state.user
