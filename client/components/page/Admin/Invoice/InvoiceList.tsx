import React from 'react';
import { useColorModeValue, Text, Flex } from '@chakra-ui/react';
import { SimpleTable } from '@/components/shared/Tabletmp';
import { InvoiceListNextPageProps } from 'pages/admin/invoice';
import { currencyFormat } from '@/components/function/utils/format';

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
  invoices: {
    _id: string;
    name: string;
    amountPaid: number;
    status: string;
    createdAt: string;
  }[];
};
const tableData: TTableData = {
  thead: [
    { _id: '1', label: 'Invoice Name' },
    { _id: '2', label: 'Amount Paid' },
    { _id: '3', label: 'status' },
    { _id: '5', label: 'CreatedAt' },
  ],
  tbody: [],
  invoices: [
    {
      _id: '1',
      name: 'Invoice 1',
      amountPaid: 10,
      status: 'Paid',
      createdAt: 'Oct, 1, 2021',
    },
    {
      _id: '2',
      name: 'Invoice 2',
      amountPaid: 30,
      status: 'Fail to pay',
      createdAt: 'Oct, 1, 2021',
    },
  ],
};

const List = (props: InvoiceListNextPageProps) => {
  console.log(props);
  const textColor = useColorModeValue('gray.700', 'white');

  tableData.tbody = [];
  tableData.invoices.map((invoice) => {
    const record: {
      link: string;
      tds: JSX.Element[];
    } = { link: `/invoice/${invoice._id}`, tds: [] };
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {invoice.name}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {currencyFormat({ n: invoice.amountPaid })}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {invoice.status}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {invoice.createdAt}
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
