import React from 'react';
import { Text, Box, Container, Flex } from '@chakra-ui/react';
export const ResponsiveTableText = ({ children }) => {
  return (
    <Text
      w="100%"
      color="Black"
      fontSize="20px"
      my={{ base: '25px', sm: '25px', md: '15px' }}
    >
      {children}
    </Text>
  );
};

export const ResponsiveTableTextOptions = ({ children }) => {
  return (
    <Text
      w="100%"
      color="white"
      fontSize="20px"
      my={{ base: '25px', sm: '25px', md: '15px' }}
    >
      {children}
    </Text>
  );
};
export const OptionsBox = ({ children }) => {
  return (
    <Box
      w="100%"
      color="Black"
      fontSize="20px"
      my={{ base: '25px', sm: '25px', md: '15px' }}
    >
      {children}
    </Box>
  );
};
export const TableResponsiveContainer = ({ id, children }) => {
  return (
    <Container
      display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
      p="0"
      justifyContent="left"
      maxWidth="100%"
    >
      {children}
    </Container>
  );
};
export const TableResponsiveFlexContainer = ({ children, color }) => {
  return (
    <Flex
      flexDirection="column"
      w="170px"
      backgroundColor={color}
      m="0"
      textAlign="center"
      justifyContent="left"
    >
      {children}
    </Flex>
  );
};
export const TableResponsiveFlexOperations = ({
  children,
  colorPar,
  colorInpar,
  index,
}) => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      backgroundColor={index % 2 === 0 ? colorPar : colorInpar}
      m="0"
      textAlign="center"
      justifyContent="left"
    >
      {children}
    </Flex>
  );
};
export const TableResponsiveTitle = ({ children }) => {
  return (
    <Text
      display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none' }}
      mb="20px"
      justifyContent="center"
    >
      {children}
    </Text>
  );
};
