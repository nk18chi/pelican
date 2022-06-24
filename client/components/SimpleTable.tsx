import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useColorModeValue,
  Text,
  Box,
  Flex,
  Avatar,
  Badge,
} from '@chakra-ui/react';

const SimpleTable = () => {
  const textColor = useColorModeValue('gray.700', 'white');
  return (
    <TableContainer
      bg={useColorModeValue('white', 'gray.900')}
      borderRadius="15px"
      p="20px"
    >
      <Box p="6px 0px 22px 0px">
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          Simple Table
        </Text>
      </Box>

      <Table variant="simple">
        <Thead>
          <Tr my=".8rem" pl="0px" color="gray.400">
            <Th color="gray.400">To convert</Th>
            <Th color="gray.400">into</Th>
            <Th color="gray.400" isNumeric>
              multiply by
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td minWidth={{ sm: '250px' }} pl="0px">
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Avatar
                  src="/assets/img/avatars/avatar1.png"
                  w="50px"
                  borderRadius="12px"
                  me="18px"
                />
                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    minWidth="100%"
                  >
                    John Smith
                  </Text>
                  <Text fontSize="sm" color="gray.400" fontWeight="normal">
                    email@email.com
                  </Text>
                </Flex>
              </Flex>
            </Td>

            <Td>
              <Flex direction="column">
                <Text fontSize="md" color={textColor} fontWeight="bold">
                  Main Text
                </Text>
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  Sub Text
                </Text>
              </Flex>
            </Td>
            <Td>
              <Badge
                bg="green.400"
                color="white"
                fontSize="16px"
                p="3px 10px"
                borderRadius="8px"
              >
                Active
              </Badge>
            </Td>
            <Td>
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                pb=".5rem"
              >
                2022/01/01
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
