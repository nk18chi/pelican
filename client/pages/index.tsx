import type { NextPage, GetStaticProps } from 'next';
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
  Checkbox,
  Button,
} from '@chakra-ui/react';
import { css } from '@emotion/react';

const stylePrimary = css`
  .chakra-checkbox__label {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

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
    selected: false,
  },
  {
    id: '3',
    isNew: true,
    imageURL: '/assets/img/phones/phone-3.png',
    name: 'Samsung Galaxy',
    price: 1200,
    rating: 4.2,
    numReviews: 34,
    selected: false,
  },
];

type TProductOptions = {
  id: number;
  label: string;
  price: number;
};

const productOptions: TProductOptions[] = [
  { id: 1, label: 'Device Protection', price: 6.99 },
  { id: 2, label: 'Premium Voicemail-To-Text', price: 15 },
];

import client from '../apollo-client';
import { GET_PRODUCT_MANY, GET_PRODUCT_BY_ID } from '../gql/product';
import { TProduct } from 'types/product';
import Product from '@/components/card/Product';
import AccordionItemBlock from '@/components/Accordion/AccordionItemBlock';
import PricingHorizontal from '@/components/pricing/PricingHorizontal';
import {
  QueryProductById,
  QueryProductByIdVariables,
} from '@/generated/QueryProductById';
import {
  QueryProductMany,
  QueryProductManyVariables,
} from '@/generated/QueryProductMany';
import { FormStatus } from 'types/plan';

const Home: NextPage<{ product: TProduct; products: [TProduct] }> = ({
  product,
  products,
}) => {
  console.log('product', product);
  console.log('products', products);

  return (
    <>
      <Container maxW={'5xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pt={{ base: 20, md: 36 }}
          pb={{ base: 20, md: 8 }}
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
                <AccordionItemBlock
                  title={'Choose your new phone'}
                  status={FormStatus.valid}
                >
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
                <AccordionItemBlock
                  title={'Choose your plan'}
                  status={FormStatus.notSet}
                >
                  <PricingHorizontal />
                </AccordionItemBlock>
                <AccordionItemBlock
                  title={'Additional Options'}
                  status={FormStatus.invalid}
                >
                  <Stack direction="column">
                    {productOptions.map((option) => (
                      <Checkbox
                        key={option.id}
                        size="lg"
                        colorScheme="green"
                        w="100%"
                        css={stylePrimary}
                      >
                        <p>{option.label}</p>
                        <p>${option.price.toFixed(2)}/mo</p>
                      </Checkbox>
                    ))}
                  </Stack>
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
        <Stack
          spacing={4}
          direction="row"
          align="center"
          justifyContent={'center'}
          pb={8}
        >
          <Button colorScheme="teal" size="lg">
            Proceed to Checkout
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { productById },
  } = await client.query<QueryProductById, QueryProductByIdVariables>({
    query: GET_PRODUCT_BY_ID,
    variables: {
      id: '62d4b636d41f4441db37ef01',
    },
  });
  const {
    data: { productMany },
  } = await client.query<QueryProductMany, QueryProductManyVariables>({
    query: GET_PRODUCT_MANY,
  });
  return {
    props: {
      product: productById,
      products: productMany,
    },
  };
};

export default Home;
