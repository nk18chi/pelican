import React from 'react';
import { useColorModeValue, Text, Flex } from '@chakra-ui/react';
import { SimpleTable } from '@/components/shared/Table';
import { PlanListNextPageProps } from 'pages/admin/plan';
import { currencyFormat } from '@/components/function/utils/format';

type TTableData = {
  thead: {
    _id: string;
    label: string;
  }[];
  tbody: { link?: string; tds: JSX.Element[] }[];
  plans: {
    _id: string;
    title: string;
    options: {
      _id: string;
      desc: string;
    }[];
    price: number;
    createdAt: string;
  }[];
};
const tableData: TTableData = {
  thead: [
    { _id: '1', label: 'Title' },
    { _id: '2', label: 'Description' },
    { _id: '3', label: 'Price' },
    { _id: '4', label: 'CreatedAt' },
  ],
  tbody: [],
  plans: [
    {
      _id: '1',
      title: 'Standard',
      options: [
        { _id: '1', desc: 'up to 10 GB / mo' },
        { _id: '2', desc: '30 min free call / mo' },
        { _id: '3', desc: 'Unlimited Canada Calling' },
      ],
      price: 30.0,
      createdAt: 'Oct, 1, 2021',
    },
    {
      _id: '2',
      title: 'Gold',
      options: [
        { _id: '1', desc: 'up to 50 GB / mo' },
        { _id: '2', desc: '120 min free call / mo' },
        { _id: '3', desc: 'Unlimited Canada/US Calling' },
      ],
      price: 70.0,
      createdAt: 'Oct, 2, 2021',
    },
    {
      _id: '3',
      title: 'Platinum',
      options: [
        { _id: '1', desc: 'unlimited data' },
        { _id: '2', desc: 'free call' },
        { _id: '3', desc: 'Unlimited International Calling' },
      ],
      price: 200.0,
      createdAt: 'Oct, 3, 2021',
    },
  ],
};

const List = (props: PlanListNextPageProps) => {
  console.log(props);
  const textColor = useColorModeValue('gray.700', 'white');

  tableData.tbody = [];
  tableData.plans.map((plan) => {
    const record: {
      link: string;
      tds: JSX.Element[];
    } = { link: `/plan/${plan._id}`, tds: [] };
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {plan.title}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        {plan.options.map((option) => {
          return (
            <Text key={option._id} fontSize="md" color={textColor}>
              - {option.desc}
            </Text>
          );
        })}
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {currencyFormat({ n: plan.price })}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {plan.createdAt}
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
