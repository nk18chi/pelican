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
  Tr,
  Tbody,
  Td,
  Grid,
  GridItem,
  Accordion,
  Checkbox,
  Button,
  HStack,
  VStack,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Divider,
  ExpandedIndex,
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

const styleEmphasize = css`
  font-weight: bold;
  font-size: 1.1rem;
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

type TProductOptions = {
  id: string;
  label: string;
  price: number;
};

const productOptions: TProductOptions[] = [
  { id: '1', label: 'Device Protection', price: 6.99 },
  { id: '2', label: 'Premium Voicemail-To-Text', price: 15 },
];

const taxes = [
  { id: '1', label: 'GST/HST', percentage: 0.05 },
  { id: '2', label: 'PST/QST', percentage: 0.07 },
];

type TInvoiceDetail = {
  id: string;
  label: string;
  value: number;
};

type TInvoice = {
  id: string;
  label: string;
  details: TInvoiceDetail[];
  total: {
    label: string;
    value: number;
  };
};

const invoiceTable: TInvoice[] = [
  {
    id: '1',
    label: 'Monthly Fees',
    details: [
      // { id: 1, label: 'Plan Name', price: 100 },
      // { id: 2, label: 'Additional Service', price: 10 },
      // { id: 2, label: 'Additional Service', price: 20 },
      // { id: 3, label: 'Subtotal', price: 130 },
      // { id: 4, label: 'GST/HST', price: 6.5 },
      // { id: 5, label: 'PST/QST', price: 9.1 },
    ],
    total: { label: 'Total', value: 0 },
  },
  {
    id: '2',
    label: 'One-Time Fees',
    details: [
      // { id: 1, label: 'Phone Name', price: 1000 },
      // { id: 2, label: 'Set Up Service Fee', price: 50 },
      // { id: 3, label: 'Subtotal', price: 1050 },
      // { id: 4, label: 'GST/HST', price: 52.5 },
      // { id: 5, label: 'PST/QST', price: 73.5 },
    ],
    total: { label: 'Total', value: 0 },
  },
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
import { useState } from 'react';
import { useEffect } from 'react';
import { currentFormat } from 'utils/format';

type TOption = {
  id: string;
  label: string;
  price: number;
};

type TPhone = {
  id: string;
  label: string;
  price: number;
};

export type TPlan = {
  id: string;
  label: string;
  price: number;
};

type TSelectedPlan = {
  phone?: TPhone;
  plan?: TPlan;
  options: TOption[];
};

const Home: NextPage<{ product: TProduct; products: [TProduct] }> = ({
  product,
  products,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<TSelectedPlan>({
    options: [],
  });
  const [validation, setValidation] = useState<boolean>(false);
  const [accordionIndex, setAccordionIndex] = useState<ExpandedIndex>(0);
  const [invoice, setInvoice] = useState(invoiceTable);
  console.log('product', product);
  console.log('products', products);

  useEffect(() => {
    setValidation(selectedPlan.phone && selectedPlan.plan ? true : false);
    if (selectedPlan.phone && selectedPlan.plan) setAccordionIndex(2);
    else if (selectedPlan.phone) setAccordionIndex(1);
  }, [selectedPlan.phone, selectedPlan.plan]);

  useEffect(() => {
    const monthlyInvoice: TInvoice = { ...invoiceTable[0], details: [] };
    const oneTimeInvoice: TInvoice = { ...invoiceTable[1], details: [] };

    if (selectedPlan.plan) {
      monthlyInvoice.details.push({
        id: '1',
        label: `${selectedPlan.plan.label} Plan`,
        value: selectedPlan.plan.price,
      });
    }

    if (selectedPlan.phone) {
      oneTimeInvoice.details.push({
        id: '1',
        label: selectedPlan.phone.label,
        value: selectedPlan.phone.price,
      });
      oneTimeInvoice.details.push({
        id: '2',
        label: 'Set Up Service Fee',
        value: 50,
      });
    }

    if (selectedPlan.options.length > 0) {
      selectedPlan.options.forEach((opt) => {
        monthlyInvoice.details.push({
          id: (opt.id + 1).toString(),
          label: opt.label,
          value: opt.price,
        });
      });
    }

    // subtotal/taxes
    const calcTotal = (invoice: TInvoice) => {
      const subtotal = invoice.details
        .map((detail) => detail.value)
        .reduce((a, b) => a + b, 0);
      let total = subtotal;
      invoice.details.push({
        id: '10',
        label: 'Subtotal',
        value: subtotal,
      });
      taxes.forEach((tax) => {
        const taxValue = subtotal * tax.percentage;
        total += taxValue;
        invoice.details.push({
          id: (10 + tax.id).toString(),
          label: tax.label,
          value: taxValue,
        });
      });
      invoice.total.value = total;
    };
    calcTotal(monthlyInvoice);
    calcTotal(oneTimeInvoice);

    setInvoice((prev) => {
      return prev.map((p) => {
        return p.id === '1' ? monthlyInvoice : oneTimeInvoice;
      });
    });
  }, [selectedPlan]);

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
            <VStack w="60%">
              <Accordion
                w="100%"
                allowToggle
                index={accordionIndex}
                onChange={(id: ExpandedIndex) => setAccordionIndex(id)}
              >
                <AccordionItemBlock
                  title={'Choose your new phone'}
                  status={
                    selectedPlan.phone ? FormStatus.valid : FormStatus.notSet
                  }
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
                          selected={selectedPlan.phone?.id === p.id}
                          handleClick={() =>
                            setSelectedPlan((prev) => ({
                              ...prev,
                              phone: {
                                id: p.id,
                                label: p.name,
                                price: p.price,
                              },
                            }))
                          }
                        />
                      </GridItem>
                    ))}
                  </Grid>
                </AccordionItemBlock>
                <AccordionItemBlock
                  title={'Choose your plan'}
                  status={
                    selectedPlan.plan ? FormStatus.valid : FormStatus.notSet
                  }
                >
                  <PricingHorizontal
                    selectedId={selectedPlan.plan?.id}
                    handleClick={(plan) =>
                      setSelectedPlan((prev) => ({
                        ...prev,
                        plan: {
                          id: plan.id,
                          label: plan.label,
                          price: plan.price,
                        },
                      }))
                    }
                  />
                </AccordionItemBlock>
                <AccordionItemBlock
                  title={'Additional Options'}
                  status={FormStatus.valid}
                >
                  <Stack direction="column">
                    {productOptions.map((option) => (
                      <Checkbox
                        key={option.id}
                        size="lg"
                        colorScheme="green"
                        w="100%"
                        css={stylePrimary}
                        onChange={(e) =>
                          setSelectedPlan((prev) => {
                            let newOptions = [...prev.options];
                            if (e.target.checked) {
                              newOptions.push(option);
                            } else {
                              newOptions = newOptions.filter(
                                (opt) => opt.id !== option.id
                              );
                            }
                            return { ...prev, options: newOptions };
                          })
                        }
                      >
                        <p>{option.label}</p>
                        <p>
                          {currentFormat({ n: option.price })}
                          /mo
                        </p>
                      </Checkbox>
                    ))}
                  </Stack>
                </AccordionItemBlock>
              </Accordion>
            </VStack>
            <VStack w="40%" spacing={4}>
              <Accordion w="100%" allowToggle>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <Heading
                        as="h2"
                        w="100%"
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '2xl', md: '2xl' }}
                        lineHeight={'110%'}
                        textAlign="left"
                      >
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            Invoice
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </Heading>
                      <Divider />
                      {isExpanded
                        ? invoice.map((table) => (
                            <TableContainer
                              key={table.id}
                              px="4%"
                              py="4"
                              my="4"
                              rounded="lg"
                              bg="white"
                            >
                              <Heading
                                as="h3"
                                w="100%"
                                fontWeight={600}
                                fontSize={{ base: 'xl', sm: 'xl', md: 'xl' }}
                                lineHeight={'110%'}
                                textAlign="left"
                                mb={1}
                              >
                                {table.label}
                              </Heading>
                              <Table size="sm">
                                <Tbody>
                                  {table.details.map((detail) => (
                                    <Tr key={detail.id}>
                                      <Td>{detail.label}</Td>
                                      <Td isNumeric>
                                        {currentFormat({ n: detail.value })}
                                      </Td>
                                    </Tr>
                                  ))}
                                  <Tr>
                                    <Td css={styleEmphasize}>
                                      {table.total.label}
                                    </Td>
                                    <Td css={styleEmphasize} isNumeric>
                                      {currentFormat({ n: table.total.value })}
                                    </Td>
                                  </Tr>
                                </Tbody>
                              </Table>
                            </TableContainer>
                          ))
                        : invoice.map((table) => (
                            <TableContainer key={table.id} px="4%" py="2">
                              <HStack>
                                <Heading
                                  as="h3"
                                  w="100%"
                                  fontWeight={600}
                                  fontSize={{
                                    base: 'xl',
                                    sm: 'xl',
                                    md: 'xl',
                                  }}
                                  lineHeight={'110%'}
                                  textAlign="left"
                                  mb={1}
                                >
                                  {table.label}
                                </Heading>
                                <p css={styleEmphasize}>
                                  {currentFormat({ n: table.total.value })}
                                </p>
                              </HStack>
                            </TableContainer>
                          ))}
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </VStack>
          </Flex>
        </Stack>
        <Stack
          spacing={4}
          direction="row"
          align="center"
          justifyContent={'center'}
          pb={8}
        >
          <Button colorScheme="teal" size="lg" disabled={!validation}>
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
