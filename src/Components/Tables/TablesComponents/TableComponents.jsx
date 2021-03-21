import React from 'react';
import { Container, Table } from '@chakra-ui/react';
export const TableContainer = ({ children }) => {
  return (
    <Container
      display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
      m="auto"
      justifyContent="center"
    >
      {children}
    </Container>
  );
};

export const TableComponent = ({ children }) => {
  return (
    <Table
      variant="striped"
      colorScheme="gray"
      size="md"
      w={{ md: '600px', lg: '800px' }}
      m="auto"
      mt="5px"
      mb="20px"
    >
      {children}
    </Table>
  );
};
