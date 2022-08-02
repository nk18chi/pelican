import Head from 'next/head';
import type { NextPage } from 'next';
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Flex,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Grid,
  GridItem,
  Accordion,
} from '@chakra-ui/react';

import client from '../apollo-client';
import { GET_PRODUCT_MANY, GET_PRODUCT_BY_ID } from '../gql/product';
import { TProduct } from 'types/product';
import Product from '@/components/card/Product';
import AccordionItemBlock from '@/components/Accordion/AccordionItemBlock';
import PricingHorizontal from '@/components/pricing/PricingHorizontal';

const Home: NextPage<{ product: TProduct; products: [TProduct] }> = ({
  product,
  products,
}) => {
  console.log('product', product);
  console.log('products', products);

  const productItems = [
    {
      id: '1',
      isNew: true,
      imageURL: '/assets/img/phones/phone-1.png',
      name: 'iPhone 13',
      price: 1800,
      rating: 4.8,
      numReviews: 134,
      selected: true,
    },
    {
      id: '2',
      isNew: true,
      imageURL: '/assets/img/phones/phone-2.png',
      name: 'Goolge Pixel 6a',
      price: 1000,
      rating: 4.7,
      numReviews: 42,
    },
    {
      id: '3',
      isNew: true,
      imageURL: '/assets/img/phones/phone-3.png',
      name: 'Samsung Galaxy',
      price: 1200,
      rating: 4.2,
      numReviews: 34,
    },
  ];
  return (
    <>
      <Container maxW={'5xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            as="h1"
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Looking for a new plan? <br />
            <Text as={'span'} color={'green.400'}>
              Build Your Plan
            </Text>
          </Heading>
          <Flex alignItems="start" gap="10">
            <Box w="60%">
              <Accordion allowToggle defaultIndex={0}>
                <AccordionItemBlock title={'Choose your new phone'}>
                  <Grid templateColumns="repeat(3, 1fr)">
                    {productItems.map((p) => (
                      <GridItem key={p.id}>
                        <Product
                          isNew={p.isNew}
                          imageURL={p.imageURL}
                          name={p.name}
                          price={p.price}
                          rating={p.rating}
                          numReviews={p.numReviews}
                          selected={p.selected}
                        />
                      </GridItem>
                    ))}
                  </Grid>
                </AccordionItemBlock>
              </Accordion>
            </Box>
            <Box w="40%">
              <TableContainer>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>feet</Td>
                      <Td>centimetres (cm)</Td>
                      <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                      <Td>yards</Td>
                      <Td>metres (m)</Td>
                      <Td isNumeric>0.91444</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const { data: product } = await client.query({
    query: GET_PRODUCT_BY_ID('62d4b636d41f4441db37ef01'),
  });
  const { data: products } = await client.query({
    query: GET_PRODUCT_MANY,
  });

  return {
    props: {
      product: product.productById,
      products: products.productMany,
    },
  };
}

export default Home;
