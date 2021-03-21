import React from 'react';
import { Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import OptionsBtns from './TablesComponents/OptionsBtns';
import {
  TableContainer,
  TableComponent,
} from './TablesComponents/TableComponents';
import {
  getDate,
  options,
  home,
  abm,
  limitArray,
} from '../../Utils/tableUtils';

const OperationsTable = ({ data, page }) => {
  const tableData = limitArray(data, page);

  return (
    <>
      <TableContainer>
        <TableComponent>
          {page === home && (
            <TableCaption placement="top">
              Ultimas 10 operaciones realizadas
            </TableCaption>
          )}
          <Thead backgroundColor="teal">
            <Tr>
              {options.map((option, index) => (
                <Th color="white" key={index}>
                  {option}
                </Th>
              ))}
              {page === abm && <Th color="white">Opciones</Th>}
            </Tr>
          </Thead>
          <Tbody>
            {tableData?.map(operation => {
              return (
                <Tr key={operation.id}>
                  <Td>{operation.type}</Td>
                  <Td>{operation.concept}</Td>
                  <Td>{operation.amount}</Td>
                  <Td>{operation.category}</Td>
                  <Td>{getDate(operation.createdAt)}</Td>

                  {page === abm && (
                    <Td w="40px" p="0">
                      <OptionsBtns id={operation.id} />
                    </Td>
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </TableComponent>
      </TableContainer>
    </>
  );
};

export default OperationsTable;
