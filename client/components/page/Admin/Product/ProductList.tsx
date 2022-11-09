import React from 'react';
import { useColorModeValue, Text, Flex, Avatar } from '@chakra-ui/react';
import { SimpleTable } from '@/components/shared/Table';
import { ProductListNextPageProps } from 'pages/admin/product';
import { currencyFormat } from '@/components/function/utils/format';

type TTableData = {
  thead: {
    _id: string;
    label: string;
  }[];
  tbody: { link?: string; tds: JSX.Element[] }[];
  products: {
    _id: string;
    name: string;
    imageURL: string;
    price: number;
    isNewItem: boolean;
    rating: number;
    numReviews: number;
    createdAt: string;
  }[];
};
const tableData: TTableData = {
  thead: [
    { _id: '1', label: 'Phone' },
    { _id: '2', label: 'Price' },
    { _id: '3', label: 'Rating' },
    { _id: '4', label: 'CreatedAt' },
  ],
  tbody: [],
  products: [
    {
      _id: '1',
      name: 'iPhone 13',
      imageURL: '/assets/img/phones/phone-1.png',
      price: 1800,
      isNewItem: true,
      rating: 4.8,
      numReviews: 134,
      createdAt: 'Oct, 1, 2021',
    },
  ],
};

const List = (props: ProductListNextPageProps) => {
  console.log(props);
  const textColor = useColorModeValue('gray.700', 'white');

  tableData.tbody = [];
  tableData.products.map((product) => {
    const record: {
      link: string;
      tds: JSX.Element[];
    } = { link: `/product/${product._id}`, tds: [] };
    record.tds.push(
      <Flex
        key={product._id}
        align="center"
        py=".8rem"
        minWidth="100%"
        flexWrap="nowrap"
      >
        <Avatar src={product.imageURL} w="50px" borderRadius="12px" me="18px" />
        <Flex direction="column">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {product.name}
          </Text>
        </Flex>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {currencyFormat({ n: product.price })}
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {product.rating} ({product.numReviews} reviews)
        </Text>
      </Flex>
    );
    record.tds.push(
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {product.createdAt}
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
