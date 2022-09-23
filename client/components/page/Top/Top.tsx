import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Flex,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import { QueryProductFindMany_productFindMany } from '@/generated/QueryProductFindMany';
import { QueryPlanFindMany_planFindMany } from '@/generated/QueryPlanFindMany';
import { QueryPlanOptionFindMany_planOptionFindMany } from '@/generated/QueryPlanOptionFindMany';
import { css } from '@emotion/react';
import { PlanAccordionForm } from '@/components/shared/Form';
import { AccordionInvoice } from '@/components/shared/Invoice';
import { TopNextPageProps } from 'pages';

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

const Top: React.FC<TopNextPageProps> = ({
  products,
  taxes,
  plans,
  planOptions,
}) => {
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
            <AccordionInvoice
              title="Invoice"
              selectedPlan={selectedPlan}
              taxes={taxes}
            />
          </VStack>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Top;
