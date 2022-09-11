import type { NextPage, GetStaticProps } from 'next';
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Flex,
  Accordion,
  VStack,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Divider,
} from '@chakra-ui/react';
import { useState } from 'react';

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
import { GET_TAX_FIND_MANY } from 'gql/tax';
import { GET_PLAN_FIND_MANY } from 'gql/plan';
import { GET_PLAN_OPTION_FIND_MANY } from 'gql/planOption';
import client from '../apollo-client';
import { GET_PRODUCT_FIND_MANY } from '../gql/product';
import PlanAccordionForm from '@/components/shared/planAccordionForm';
import { DetailInvoice, SimpleInvoice } from '@/components/shared/invoice';

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

export type TSelectedPlan = {
  phone?: QueryProductFindMany_productFindMany;
  plan?: QueryPlanFindMany_planFindMany;
  options: QueryPlanOptionFindMany_planOptionFindMany[];
};

const Home: NextPage<{
  products: QueryProductFindMany_productFindMany[];
  taxes: QueryTaxFindMany_taxFindMany[];
  plans: QueryPlanFindMany_planFindMany[];
  planOptions: QueryPlanOptionFindMany_planOptionFindMany[];
}> = ({ products, taxes, plans, planOptions }) => {
  const [selectedPlan, setSelectedPlan] = useState<TSelectedPlan>({
    options: [],
  });
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
            <PlanAccordionForm
              products={products}
              plans={plans}
              planOptions={planOptions}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
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
                    {isExpanded ? (
                      <DetailInvoice
                        selectedPlan={selectedPlan}
                        taxes={taxes}
                      />
                    ) : (
                      <SimpleInvoice
                        selectedPlan={selectedPlan}
                        taxes={taxes}
                      />
                    )}
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </VStack>
        </Flex>
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
