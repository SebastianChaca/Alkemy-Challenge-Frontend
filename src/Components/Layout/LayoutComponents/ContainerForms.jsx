import React from 'react';
import { Box } from '@chakra-ui/react';
const ContainerForms = ({ children }) => {
  return (
    <Box
      w={{ base: '300px', sm: '300px', md: '400px' }}
      margin="auto"
      border="1px"
      borderColor="gray.300"
      p="30px"
      borderRadius="10px"
      mt="5%"
      mb="30px"
    >
      {children}
    </Box>
  );
};

export default ContainerForms;
