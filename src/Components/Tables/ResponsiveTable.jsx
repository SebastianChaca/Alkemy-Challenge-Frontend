import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import OptionsBtns from './TablesComponents/OptionsBtns';
import {
  ResponsiveTableText,
  ResponsiveTableTextOptions,
  OptionsBox,
  TableResponsiveContainer,
  TableResponsiveFlexContainer,
  TableResponsiveFlexOperations,
  TableResponsiveTitle,
} from './TablesComponents/TableResponsiveComponents';
import {
  getDate,
  options,
  abm,
  home,
  limitArray,
} from '../../Utils/tableUtils';
const ResponsiveTable = ({ data, page }) => {
  const color = useColorModeValue('teal', 'gray.700');
  const colorPar = useColorModeValue('white', 'gray.300');
  const colorInpar = useColorModeValue('gray.200', 'gray.400');
  const tableData = limitArray(data, page);
  return (
    <>
      {page === home && (
        <TableResponsiveTitle children={'Ultimas 10 operaciones realizadas'} />
      )}
      {tableData?.map((operation, index) => {
        return (
          <TableResponsiveContainer key={operation.id}>
            <TableResponsiveFlexContainer color={color}>
              {options.map((option, index) => (
                <ResponsiveTableTextOptions children={option} key={index} />
              ))}
              {page === abm && (
                <ResponsiveTableTextOptions children="OPTCIONES" />
              )}
            </TableResponsiveFlexContainer>
            <TableResponsiveFlexOperations
              index={index}
              colorPar={colorPar}
              colorInpar={colorInpar}
            >
              <ResponsiveTableText children={operation.type} />
              <ResponsiveTableText children={operation.concept} />
              <ResponsiveTableText children={operation.amount} />
              <ResponsiveTableText children={operation.category} />
              <ResponsiveTableText children={getDate(operation.createdAt)} />
              {page === abm && (
                <OptionsBox children={<OptionsBtns id={operation.id} />} />
              )}
            </TableResponsiveFlexOperations>
          </TableResponsiveContainer>
        );
      })}
    </>
  );
};

export default ResponsiveTable;
