import React from 'react';
import NextLink from 'next/link';
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
  thead: {
    _id: string;
    label: string;
  }[];
  tbody: { link?: string; tds: JSX.Element[] }[];
}
const SimpleTable = ({ thead, tbody }: SimpleTableProps) => {
  return (
    <TableContainer
      bg={useColorModeValue('white', 'gray.900')}
      borderRadius="15px"
      p="20px"
    >
      <Table variant="simple">
        <Thead>
          <Tr my=".8rem" pl="0px" color="gray.400">
            {thead.map((head) => (
              <Th key={head._id} color="gray.400">
                {head.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tbody.map(({ tds, link }, i) => (
            <NextLink key={i} href={`/admin${link}`}>
              <Tr _hover={{ bg: 'gray.100' }} cursor="pointer">
                {tds.map((td, j) => (
                  <Td key={j}>{td}</Td>
                ))}
              </Tr>
            </NextLink>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
