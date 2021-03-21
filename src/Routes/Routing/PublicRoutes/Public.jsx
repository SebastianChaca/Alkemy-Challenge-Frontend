import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { publicRoutes } from '../../routes';
import { useQuery } from '@apollo/client';
import { AUTH } from '../../../Apollo/Querys';
const Public = () => {
  const { data } = useQuery(AUTH);

  const token = data?.isLoggedIn.token;

  const mapRoutes = routes => {
    return routes.map(route => {
      if (route.path === '/login') {
        return (
          <Route key={route.id} exact path={route.path}>
            {token ? <Redirect to="/" /> : route.component}
          </Route>
        );
      } else {
        return (
          <Route key={route.id} exact path={route.path}>
            {route.component}
          </Route>
        );
      }
    });
  };

  return <Switch>{mapRoutes(publicRoutes)}</Switch>;
};
export default Public;
