import React, { useEffect } from 'react';

import OperationsTable from '../../Components/Tables/OperationsTable';
import ResponsiveTable from '../../Components/Tables/ResponsiveTable';
import { GET_OPERATIONS } from '../../Apollo/Querys';
import { useQuery, useApolloClient } from '@apollo/client';
import {
  EmptyData,
  ErroData,
  LoadingSpinner,
} from '../../Components/Layout/LayoutComponents/CustomComponents';
import { sortData } from '../../Utils/sortData';
import TotalBalance from '../../Components/Tables/Headers/TotalBalance';

const Home = () => {
  const client = useApolloClient();
  const { loading, error, data } = useQuery(GET_OPERATIONS);
  useEffect(() => {
    client.resetStore();
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErroData children={error.message} />;
  }
  if (data.getUserOperations.length === 0) {
    return <EmptyData />;
  }

  const sortedData = sortData(data?.getUserOperations);

  return (
    <div>
      <>
        <TotalBalance data={data?.getUserOperations} />
        <OperationsTable data={sortedData} page="home" />
        <ResponsiveTable data={sortedData} page="home" />
      </>
    </div>
  );
};

export default Home;
