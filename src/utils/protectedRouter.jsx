/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RestrictedRouter = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    exact
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

RestrictedRouter.propTypes = {
  component: PropTypes.elementType,
  location: PropTypes.any
};
