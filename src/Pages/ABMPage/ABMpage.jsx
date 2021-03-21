import React, { useEffect, useState } from 'react';
import OperationsTable from '../../Components/Tables/OperationsTable';
import ResponsiveTable from '../../Components/Tables/ResponsiveTable';
import OperationsHeader from '../../Components/Tables/Headers/FIlters';
import { GET_OPERATIONS } from '../../Apollo/Querys';
import { useQuery } from '@apollo/client';
import {
  EmptyData,
  ErroData,
  LoadingSpinner,
} from '../../Components/Layout/LayoutComponents/CustomComponents';
import { sortData } from '../../Utils/sortData';
import { filterOptions } from '../../Utils/filterOptions';

const ABMPage = () => {
  const { data, loading, error } = useQuery(GET_OPERATIONS);
  const [filterSchema, setFilter] = useState(null);
  const [filteredArray, setArray] = useState(null);

  const handleChange = (e, filterType) => {
    setFilter({ filterType, filterValue: e.target.value });
  };

  useEffect(() => {
    if (filterSchema) {
      const { filterType, filterValue } = filterSchema;
      const sortedData = sortData(
        filterOptions(filterType, filterValue, data?.getUserOperations)
      );
      setArray(sortedData);
    }
  }, [filterSchema, data?.getUserOperations]);

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
        <OperationsHeader
          data={data?.getUserOperations}
          handleChange={handleChange}
        />
        <OperationsTable
          data={filterSchema ? filteredArray : sortedData}
          page="abm"
        />
        <ResponsiveTable
          data={filterSchema ? filteredArray : sortedData}
          page="abm"
        />
      </>
    </div>
  );
};

export default ABMPage;
