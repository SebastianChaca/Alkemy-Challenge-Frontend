import HeadersContainer from '../TablesComponents/HeadersContainer';
import SelectContainer from '../TablesComponents/SelectComponent';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Filters = ({ handleChange }) => {
  return (
    <HeadersContainer>
      <SelectContainer handleChange={handleChange} filterType="Categorias" />
      <SelectContainer handleChange={handleChange} filterType="Tipo" />
      <Link to="/crear">
        <Button colorScheme="teal">Realizar una operación</Button>
      </Link>
    </HeadersContainer>
  );
};

export default Filters;
