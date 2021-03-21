import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <Box textAlign="center" mt="20px">
      <Text fontSize="4xl">Pagina no encontrada</Text>
      <Link to="/">
        <Button colorScheme="teal" mt="20px">
          Home Page
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
