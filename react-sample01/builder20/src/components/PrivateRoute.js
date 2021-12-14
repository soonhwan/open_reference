import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useReactRouter } from 'hooks';

//https://www.sitepoint.com/react-router-complete-guide/
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { history, location, match } = useReactRouter()
  const fakeAuth = {
    isAuthenticated: false
  }
  return (
    <Route
      {...rest}
      render = {props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;