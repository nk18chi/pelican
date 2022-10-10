import React from 'react';
import { useRouter } from 'next/router';
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
    tbody: { link?: string; tds: JSX.Element[] }[];
  };
}
const SimpleTable = ({ data }: SimpleTableProps) => {
  const router = useRouter();
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
          {data.tbody.map(({ tds, link }, i) => (
            <Tr
              key={i}
              _hover={{ bg: 'gray.100' }}
              cursor="pointer"
              onClick={(e) => {
                e.preventDefault;
                link && router.push(`/admin/${link}`);
              }}
            >
              {tds.map((td, j) => (
                <Td key={j}>{td}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
