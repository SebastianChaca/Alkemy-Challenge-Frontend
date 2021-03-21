import React from 'react';
import { Flex } from '@chakra-ui/react';
const HeadersContainer = ({ children }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      my="20px"
      display={{ base: 'block', sm: 'block', md: 'Flex' }}
      textAlign={{ base: 'center', sm: 'center', md: 'none' }}
    >
      {children}
    </Flex>
  );
};

export default HeadersContainer;
