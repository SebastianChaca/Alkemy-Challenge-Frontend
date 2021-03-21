import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { AUTH } from '../../../Apollo/Querys';
import UiComponents from '../../../Pages/Layout/UiComponents';

const PrivateRouteComponent = ({ children, path }) => {
  const { data } = useQuery(AUTH);

  const token = data?.isLoggedIn.token;

  return (
    <Route
      path={path}
      render={() => {
        return token ? (
          <UiComponents> {children} </UiComponents>
        ) : (
          <Redirect to="/login"></Redirect>
        );
      }}
    ></Route>
  );
};

export default PrivateRouteComponent;
