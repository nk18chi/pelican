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
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactHookFormInput from '@/components/input/ReactHookFormInput';
import Product from '@/components/card/Product';
import AccordionItemBlock from '@/components/Accordion/AccordionItemBlock';
import PricingHorizontal from '@/components/pricing/PricingHorizontal';
import {
  QueryProductFindMany,
  QueryProductFindManyVariables,
  QueryProductFindMany_productFindMany,
} from '@/generated/QueryProductFindMany';
import {
  QueryTaxFindMany,
  QueryTaxFindManyVariables,
  QueryTaxFindMany_taxFindMany,
} from '@/generated/QueryTaxFindMany';
import {
  QueryPlanFindMany,
  QueryPlanFindManyVariables,
  QueryPlanFindMany_planFindMany,
} from '@/generated/QueryPlanFindMany';
import {
  QueryPlanOptionFindMany,
  QueryPlanOptionFindManyVariables,
  QueryPlanOptionFindMany_planOptionFindMany,
} from '@/generated/QueryPlanOptionFindMany';
import { css } from '@emotion/react';
import { FormStatus } from 'types/plan';
import { currencyFormat } from 'utils/format';
import { SUPPORTED_COUNTRIES, generateRandomPhoneNumber } from 'utils/fake';
import { GET_TAX_FIND_MANY } from 'gql/tax';
import { GET_PLAN_FIND_MANY } from 'gql/plan';
import { GET_PLAN_OPTION_FIND_MANY } from 'gql/planOption';
import client from '../apollo-client';
import { GET_PRODUCT_FIND_MANY } from '../gql/product';

const stylePage = css`
  .chakra-checkbox__label {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .chakra-accordion .chakra-input {
    background-color: white;
  }
  .chakra-accordion .chakra-button {
    margin-left: auto;
    display: flex;
    margin-top: 20px;
  }
`;

const styleEmphasize = css`
  font-weight: bold;
  font-size: 1.1rem;
`;

type TInvoice = {
  id: string;
  label: string;
  details: {
    id: string;
    label: string;
    value: number;
  }[];
  total: {
    label: string;
    value: number;
  };
};

const invoiceTable: TInvoice[] = [
  {
    id: '1',
    label: 'Monthly Fees',
    details: [],
    total: { label: 'Total', value: 0 },
  },
  {
    id: '2',
    label: 'One-Time Fees',
    details: [],
    total: { label: 'Total', value: 0 },
  },
];

type TSelectedPlan = {
  phone?: QueryProductFindMany_productFindMany;
  plan?: QueryPlanFindMany_planFindMany;
  options: QueryPlanOptionFindMany_planOptionFindMany[];
};

export type TInputField = {
  name: string;
  displayName: string;
  type: 'text' | 'email' | 'password' | 'phone';
  validation: {
    required: boolean;
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: number;
  };
  description?: string;
  disabled?: boolean;
  defaultValue?: string;
};

const randomPhoneNumber = generateRandomPhoneNumber({
  country: SUPPORTED_COUNTRIES.CANADA,
});
const inputFields: TInputField[] = [
  {
    name: 'firstName',
    displayName: 'First Name',
    type: 'text',
    validation: { required: true },
    description: "Don't put your actual information",
  },
  {
    name: 'lastName',
    displayName: 'Last Name',
    type: 'text',
    validation: { required: true },
    description: "Don't put your actual information",
  },
  {
    name: 'phoneNumber',
    displayName: 'Phone Number',
    type: 'phone',
    validation: { required: true },
    description: "Don't put your actual information",
    disabled: true,
    defaultValue: randomPhoneNumber,
  },
  {
    name: 'email',
    displayName: 'Email',
    type: 'email',
    validation: {
      required: true,
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Your email is not valid.',
      },
    },
    description: "Don't put your actual information",
    disabled: true,
    defaultValue: `yourphone${randomPhoneNumber}@example.com`,
  },
  {
    name: 'password',
    displayName: 'Password',
    type: 'password',
    validation: { required: true, minLength: 8 },
    defaultValue: 'buildyourplan',
    disabled: true,
    description: '"buildyourplan" is your password',
  },
];

const Home: NextPage<{
  products: QueryProductFindMany_productFindMany[];
  taxes: QueryTaxFindMany_taxFindMany[];
  plans: QueryPlanFindMany_planFindMany[];
  planOptions: QueryPlanOptionFindMany_planOptionFindMany[];
}> = ({ products, taxes, plans, planOptions }) => {
  const [selectedPlan, setSelectedPlan] = useState<TSelectedPlan>({
    options: [],
  });
  const [validation, setValidation] = useState<boolean>(false);
  const [accordionIndex, setAccordionIndex] = useState<ExpandedIndex>(0);
  const [accordionStatus, setAccordionStatus] = useState<FormStatus[]>([
    FormStatus.notSet,
    FormStatus.notSet,
    FormStatus.valid,
    FormStatus.notSet,
  ]);
  const [invoice, setInvoice] = useState(invoiceTable);
  const useFormHooks = useForm({ defaultValues: {} });
  const {
    handleSubmit,
    formState: { errors },
  } = useFormHooks;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitForm = (data: any) => {
    console.log('submit', data);
  };

  useEffect(() => {
    setValidation(selectedPlan.phone && selectedPlan.plan ? true : false);
    if (selectedPlan.phone && selectedPlan.plan) setAccordionIndex(3);
    else if (selectedPlan.phone) setAccordionIndex(1);
    setAccordionStatus((prev) => {
      if (selectedPlan.phone) prev[0] = FormStatus.valid;
      if (selectedPlan.plan) prev[1] = FormStatus.valid;
      if (errors && Object.keys(errors).length > 0) prev[3] = FormStatus.valid;
      return prev;
    });
  }, [selectedPlan.phone, selectedPlan.plan, errors]);

  useEffect(() => {
    const monthlyInvoice: TInvoice = { ...invoiceTable[0], details: [] };
    const oneTimeInvoice: TInvoice = { ...invoiceTable[1], details: [] };

    if (selectedPlan.plan) {
      monthlyInvoice.details.push({
        id: '1',
        label: `${selectedPlan.plan.title} Plan`,
        value: selectedPlan.plan.price,
      });
    }

    if (selectedPlan.phone) {
      oneTimeInvoice.details.push({
        id: '1',
        label: selectedPlan.phone.name,
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
          id: opt._id,
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
          id: tax._id,
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
  }, [taxes, selectedPlan]);

  return (
    <Container maxW={'5xl'} css={stylePage}>
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
                status={accordionStatus[0]}
              >
                <>
                  <Grid templateColumns="repeat(3, 1fr)">
                    {Array.isArray(products) &&
                      products.map((p) => (
                        <GridItem key={p._id}>
                          <Product
                            isNewItem={p.isNewItem || false}
                            imageURL={p.imageURL}
                            name={p.name}
                            price={p.price}
                            rating={p.rating || 0}
                            numReviews={p.numReviews || 0}
                            selected={selectedPlan.phone?._id === p._id}
                            handleClick={() =>
                              setSelectedPlan((prev) => ({
                                ...prev,
                                phone: p,
                              }))
                            }
                          />
                        </GridItem>
                      ))}
                  </Grid>
                  <Button
                    colorScheme="teal"
                    size="md"
                    onClick={() => {
                      setAccordionIndex(1);
                      setAccordionStatus((prev) => {
                        prev[0] = selectedPlan.phone
                          ? FormStatus.valid
                          : FormStatus.invalid;
                        return prev;
                      });
                    }}
                  >
                    Next
                  </Button>
                </>
              </AccordionItemBlock>
              <AccordionItemBlock
                title={'Choose your plan'}
                status={accordionStatus[1]}
              >
                <>
                  <PricingHorizontal
                    plans={plans}
                    selectedId={selectedPlan.plan?._id}
                    handleClick={(plan) =>
                      setSelectedPlan((prev) => ({
                        ...prev,
                        plan,
                      }))
                    }
                  />
                  <Button
                    colorScheme="teal"
                    size="md"
                    onClick={() => {
                      setAccordionIndex(2);
                      setAccordionStatus((prev) => {
                        prev[1] = selectedPlan.plan
                          ? FormStatus.valid
                          : FormStatus.invalid;
                        return prev;
                      });
                    }}
                  >
                    Next
                  </Button>
                </>
              </AccordionItemBlock>
              <AccordionItemBlock
                title={'Additional Options'}
                status={accordionStatus[2]}
              >
                <Stack direction="column">
                  {planOptions.map((option) => (
                    <Checkbox
                      key={option._id}
                      size="lg"
                      colorScheme="green"
                      w="100%"
                      onChange={(e) =>
                        setSelectedPlan((prev) => {
                          let newOptions = [...prev.options];
                          if (e.target.checked) {
                            newOptions.push(option);
                          } else {
                            newOptions = newOptions.filter(
                              (opt) => opt._id !== option._id
                            );
                          }
                          return { ...prev, options: newOptions };
                        })
                      }
                    >
                      <p>{option.label}</p>
                      <p>
                        {currencyFormat({ n: option.price })}
                        /mo
                      </p>
                    </Checkbox>
                  ))}
                  <Button
                    colorScheme="teal"
                    size="md"
                    onClick={() => setAccordionIndex(3)}
                  >
                    Next
                  </Button>
                </Stack>
              </AccordionItemBlock>
              <AccordionItemBlock
                title={'Choose your plan'}
                status={accordionStatus[3]}
              >
                <form noValidate>
                  <VStack spacing="20px" py="4" textAlign="left">
                    {inputFields.map((input) => (
                      <ReactHookFormInput
                        key={input.name}
                        {...{
                          input,
                          useFormHooks,
                        }}
                      />
                    ))}
                  </VStack>
                </form>
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
                                      {currencyFormat({ n: detail.value })}
                                    </Td>
                                  </Tr>
                                ))}
                                <Tr>
                                  <Td>{table.total.label}</Td>
                                  <Td isNumeric>
                                    {currencyFormat({ n: table.total.value })}
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
                                {currencyFormat({ n: table.total.value })}
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
        <Button
          colorScheme="teal"
          size="lg"
          disabled={!validation}
          onClick={handleSubmit(submitForm)}
        >
          Proceed to Checkout
        </Button>
      </Stack>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { productFindMany },
  } = await client.query<QueryProductFindMany, QueryProductFindManyVariables>({
    query: GET_PRODUCT_FIND_MANY,
  });
  const {
    data: { taxFindMany },
  } = await client.query<QueryTaxFindMany, QueryTaxFindManyVariables>({
    query: GET_TAX_FIND_MANY,
  });
  const {
    data: { planFindMany },
  } = await client.query<QueryPlanFindMany, QueryPlanFindManyVariables>({
    query: GET_PLAN_FIND_MANY,
  });
  const {
    data: { planOptionFindMany },
  } = await client.query<
    QueryPlanOptionFindMany,
    QueryPlanOptionFindManyVariables
  >({
    query: GET_PLAN_OPTION_FIND_MANY,
  });
  return {
    props: {
      products: productFindMany,
      taxes: taxFindMany,
      plans: planFindMany,
      planOptions: planOptionFindMany,
    },
  };
};

export default Home;
