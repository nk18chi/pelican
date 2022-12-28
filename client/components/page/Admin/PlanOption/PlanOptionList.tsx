import React from 'react';
import { useColorModeValue, Text, Flex } from '@chakra-ui/react';
import { SimpleTable } from '@/components/shared/Table';
import { PlanOptionListNextPageProps } from 'pages/admin/planOption';
import { currencyFormat } from '@/components/function/utils/format';

type TTableData = {
  thead: {
    _id: string;
    label: string;
  }[];
  tbody: { link?: string; tds: JSX.Element[] }[];
  planOptions: {
    _id: string;
    label: string;
    price: number;
    createdAt: string;
  }[];
};
const tableData: TTableData = {
  thead: [
    { _id: '1', label: 'Label' },
    { _id: '2', label: 'Price' },
    { _id: '3', label: 'CreatedAt' },
  ],
  tbody: [],
  planOptions: [
    {
      _id: '1',
      label: 'Device Protection',
      price: 6.99,
      createdAt: 'Oct, 1, 2021',
    },
    {
      _id: '2',
      label: 'Premium Voicemail-To-Text',
      price: 15.0,
      createdAt: 'Oct, 2, 2021',
    },
  ],
};

const List = (props: PlanOptionListNextPageProps) => {
  console.log(props);
  const textColor = useColorModeValue('gray.700', 'white');

  tableData.tbody = [];
  tableData.planOptions.map((option) => {
    const record: {
      link: string;
      tds: JSX.Element[];
    } = { link: `/planOption/${option._id}`, tds: [] };
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {option.label}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {currencyFormat({ n: option.price })}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {option.createdAt}
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
