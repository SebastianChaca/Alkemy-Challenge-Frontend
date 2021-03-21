import React, { useEffect, useState } from 'react';
import HeadersContainer from '../TablesComponents/HeadersContainer';
import { sumTotal } from '../../../Utils/sumTotal';
import { Text } from '@chakra-ui/react';

const TotalBalance = ({ data }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(sumTotal(data));
  }, [total, data]);

  return (
    <HeadersContainer>
      <Text fontSize="2xl">Balance total : ${total}</Text>
    </HeadersContainer>
  );
};

export default TotalBalance;
