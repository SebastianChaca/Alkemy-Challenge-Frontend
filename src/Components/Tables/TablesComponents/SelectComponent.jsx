import React from 'react';
import { Select } from '@chakra-ui/react';
import { GET_OPERATIONS } from '../../../Apollo/Querys';
import { getOptions } from '../../../Utils/getOptions';
import { useApolloClient } from '@apollo/client';

const SelectComponent = ({ handleChange, filterType }) => {
  const client = useApolloClient();
  const { getUserOperations } = client.readQuery({ query: GET_OPERATIONS });
  const optionArray = getOptions(getUserOperations, filterType);

  return (
    <Select
      variant="flushed"
      w="120px"
      my={{ base: '15px', sm: '15px', md: 'none' }}
      mx={{ base: 'auto', sm: 'auto', md: '30px' }}
      placeholder={filterType}
      onChange={e => handleChange(e, filterType)}
    >
      {optionArray?.map((category, index) => (
        <option value={category} key={index}>
          {category}
        </option>
      ))}
    </Select>
  );
};

export default SelectComponent;
