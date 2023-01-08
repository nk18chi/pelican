import React from 'react';
import { useColorModeValue, Text, Flex, Avatar } from '@chakra-ui/react';
import { SimpleTable } from '@/components/shared/Table';
import { CustomerListNextPageProps } from 'pages/admin/customer';

type TTableData = {
  thead: {
    _id: string;
    label: string;
  }[];
  tbody: { link?: string; tds: JSX.Element[] }[];
  users: {
    _id: string;
    name: string;
    email: string;
    phone: number;
    product: {
      phone: string;
      plan: string;
      options: { _id: string; label: string }[];
    };
    invoice: {
      lastPaymentAt: string;
      lastPaymentAmount: string;
    };
    createdAt: string;
  }[];
};

const tableData: TTableData = {
  thead: [
    { _id: '1', label: 'Profile' },
    { _id: '2', label: 'Phone' },
    { _id: '3', label: 'Plan' },
    { _id: '4', label: 'Last Invoice' },
    { _id: '5', label: 'CreatedAt' },
  ],
  tbody: [],
  users: [
    {
      _id: '1',
      name: 'John Smith',
      email: 'john@example.com',
      phone: +1604123456,
      product: {
        phone: 'iPhone 13',
        plan: 'Standard Plan',
        options: [
          { _id: '1', label: 'Device Protection' },
          { _id: '2', label: 'Premium Voicemail-To-Text' },
        ],
      },
      invoice: {
        lastPaymentAt: 'Jan, 1, 2022',
        lastPaymentAmount: '$100',
      },
      createdAt: 'Oct, 1, 2021',
    },
  ],
};

const List = (props: CustomerListNextPageProps) => {
  console.log(props);
  const textColor = useColorModeValue('gray.700', 'white');
  tableData.tbody = [];
  tableData.users.map((user) => {
    const record: {
      link: string;
      tds: JSX.Element[];
    } = { link: `/customer/${user._id}`, tds: [] };
    record.tds.push(
      <Flex
        key={user._id}
        align="center"
        py=".8rem"
        minWidth="100%"
        flexWrap="nowrap"
      >
        <Avatar w="50px" borderRadius="12px" me="18px" />
        <Flex direction="column">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {user.name}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {user.email}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {user.phone}
          </Text>
        </Flex>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {user.product.phone}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {user.product.plan}
        </Text>
        {user.product.options.map((option) => (
          <Text
            key={option._id}
            fontSize="sm"
            color="gray.400"
            fontWeight="normal"
          >
            {option.label}
          </Text>
        ))}
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {user.invoice.lastPaymentAmount}
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="normal">
          {user.invoice.lastPaymentAt}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {user.createdAt}
        </Text>
      </Flex>
    );
    tableData.tbody.push(record);
  });
  return (
    <main>
      <SimpleTable thead={tableData.thead} tbody={tableData.tbody} />
    </main>
  );
};

export default List;
