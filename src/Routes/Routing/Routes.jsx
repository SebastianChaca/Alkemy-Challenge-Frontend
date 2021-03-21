import React from 'react';
import MapRoutes from './MapRoutes';
import { publicRoutes, privateRoutes } from '../routes';
import UiComponents from '../../Pages/Layout/UiComponents';
import { AUTH } from '../../Apollo/Querys';
import { useQuery } from '@apollo/client';
const Routes = () => {
  const { data } = useQuery(AUTH);

  const token = data?.isLoggedIn;
  return (
    <div>
      {token && (
        <UiComponents>
          <MapRoutes routesArray={privateRoutes} />
        </UiComponents>
      )}
      {!token && <MapRoutes routesArray={publicRoutes} />}
    </div>
  );
};

export default Routes;
