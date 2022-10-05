import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorModeValue,
} from '@chakra-ui/react';

interface SimpleTableProps {
  data: {
    thead: {
      _id: string;
      label: string;
    }[];
    tbody: JSX.Element[][];
  };
}
const SimpleTable = ({ data }: SimpleTableProps) => {
  return (
    <TableContainer
      bg={useColorModeValue('white', 'gray.900')}
      borderRadius="15px"
      p="20px"
    >
      <Table variant="simple">
        <Thead>
          <Tr my=".8rem" pl="0px" color="gray.400">
            {data.thead.map((head) => (
              <Th key={head._id} color="gray.400">
                {head.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.tbody.map((body, i) => (
            <Tr key={i}>
              {body.map((child, j) => (
                <Td key={j}>{child}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
