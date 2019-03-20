import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import { NavItem } from '../styles/HeaderStyles';

const Navlink = ({ children, user }) => {
  return (
    <div>
        <Link to={to} query={user.name}>
          <NavItem>{children}</NavItem>
        </Link>
    </div>
  );
};

export default Navlink;