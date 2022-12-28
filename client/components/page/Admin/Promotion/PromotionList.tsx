import React from 'react';
import { useColorModeValue, Text, Flex, Icon } from '@chakra-ui/react';
import { SimpleTable } from '@/components/shared/Tabletmp';
import { PromotionListNextPageProps } from 'pages/admin/promotion';
import { currencyFormat } from '@/components/function/utils/format';
import { FaCheckCircle } from 'react-icons/fa';

export enum Duration {
  once = 'once',
  repeating = 'repeating',
  forever = 'forever',
}

type TTableData = {
  thead: {
    _id: string;
    label: string;
  }[];
  tbody: { link?: string; tds: JSX.Element[] }[];
  promotions: {
    _id: string;
    name: string;
    amountOff: number;
    duration: Duration;
    active: boolean;
    createdAt: string;
  }[];
};
const tableData: TTableData = {
  thead: [
    { _id: '1', label: 'Promotion Name' },
    { _id: '2', label: 'Amount Off' },
    { _id: '3', label: 'Duration' },
    { _id: '4', label: 'Active' },
    { _id: '5', label: 'CreatedAt' },
  ],
  tbody: [],
  promotions: [
    {
      _id: '1',
      name: 'Promotion 1',
      amountOff: 10,
      duration: Duration.once,
      active: true,
      createdAt: 'Oct, 1, 2021',
    },
    {
      _id: '2',
      name: 'Promotion 2',
      amountOff: 40,
      duration: Duration.forever,
      active: false,
      createdAt: 'Oct, 1, 2021',
    },
  ],
};

const List = (props: PromotionListNextPageProps) => {
  console.log(props);
  const textColor = useColorModeValue('gray.700', 'white');

  tableData.tbody = [];
  tableData.promotions.map((promotion) => {
    const record: {
      link: string;
      tds: JSX.Element[];
    } = { link: `/promotion/${promotion._id}`, tds: [] };
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {promotion.name}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {currencyFormat({ n: promotion.amountOff })}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {Duration[promotion.duration]}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {promotion.active && <Icon as={FaCheckCircle} color="green.500" />}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {promotion.createdAt}
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
