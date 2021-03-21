import React from 'react';
import UpdateOperation from '../../Components/UpdateOperation/UpdateOperation';
import { useQuery } from '@apollo/client';
import { GET_OPERATION_BY_ID } from '../../Apollo/Querys';
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '../../Components/Layout/LayoutComponents/CustomComponents';

const UpdateOperationsPage = () => {
  const { idParam } = useParams();
  const { data, loading, error } = useQuery(GET_OPERATION_BY_ID, {
    variables: {
      id: idParam,
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error?.message) {
    return <h1>{error.message}</h1>;
  }
  return (
    <UpdateOperation defaultValues={data?.getOperationById} id={idParam} />
  );
};

export default UpdateOperationsPage;
