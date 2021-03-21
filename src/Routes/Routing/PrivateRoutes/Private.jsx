import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRouteComponent from './PrivateRouteComponent';
import { privateRoutes } from '../../routes';

const Private = () => {
  const mapRoutes = routes => {
    return routes.map(route => {
      return (
        <PrivateRouteComponent key={route.id} exact path={route.path}>
          {route.component}
        </PrivateRouteComponent>
      );
    });
  };
  return <Switch>{mapRoutes(privateRoutes)}</Switch>;
};

export default Private;
