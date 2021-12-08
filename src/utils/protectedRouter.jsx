import React from 'react';
import { Route, Redirect } from 'react-router-dom';

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
