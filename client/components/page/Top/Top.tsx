import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Flex,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { PlanAccordionForm } from '@/components/shared/Form';
import { AccordionInvoice } from '@/components/shared/Invoice';
import { TopNextPageProps } from 'pages';
import { PromotionInputForm } from '@/components/shared/Promotion';
import TopContextProvider from './TopContextProvider';
import ProductList from '@/components/model/Product/ProductList';
import PricingHorizontal from '@/components/shared/Form/PricingHorizontal';
import { useCallback, useState } from 'react';
import { QueryProductFindMany_productFindMany } from '@/generated/QueryProductFindMany';
import { QueryPlanFindMany_planFindMany } from '@/generated/QueryPlanFindMany';
import { QueryPlanOptionFindMany_planOptionFindMany } from '@/generated/QueryPlanOptionFindMany';
import PlanOptionCheckbox from '@/components/shared/Form/PlanOptionCheckbox';
import CustomerForm from '@/components/shared/Form/CustomerForm';
import { FormStatus } from '@/components/types/plan';

type TSelectedOrder = {
  phone?: QueryProductFindMany_productFindMany;
  plan?: QueryPlanFindMany_planFindMany;
  options?: QueryPlanOptionFindMany_planOptionFindMany[];
};
const Top: React.FC<TopNextPageProps> = ({
  products,
  taxes,
  plans,
  planOptions,
}) => {
  const [selectedOrder, setSelectedOrder] = useState<TSelectedOrder>({});
  const useFormHooks = useForm({ defaultValues: {} });
  const {
    handleSubmit,
    formState: { errors, submitCount },
  } = useFormHooks;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitForm = (data: any) => {
    console.log('submit', data);
  };

  const updateOrder = useCallback(
    (params: TSelectedOrder) => {
      if (!setSelectedOrder) return;
      setSelectedOrder((prev) => ({
        ...prev,
        ...params,
      }));
    },
    [setSelectedOrder]
  );

  console.log('selectedOrder', selectedOrder);
  return (
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
        <TopContextProvider>
          <Flex alignItems="start" gap="10">
            <VStack w="60%">
              <PlanAccordionForm
                handleSubmitButton={handleSubmit(submitForm)}
                accordionBlocks={[
                  {
                    title: 'Choose your new phone (Optional)',
                    component: <ProductList products={products} />,
                    validate: FormStatus.valid,
                  },
                  {
                    title: 'Choose your plan',
                    component: (
                      <PricingHorizontal
                        plans={plans}
                        selectedId={selectedOrder?.plan?._id}
                        handleClick={(plan) => {
                          updateOrder({ plan });
                        }}
                      />
                    ),
                    validate: selectedOrder.plan
                      ? FormStatus.valid
                      : FormStatus.invalid,
                  },
                  {
                    title: 'Additional Options',
                    component: (
                      <PlanOptionCheckbox
                        planOptions={planOptions}
                        handleCheckboxChange={() => {
                          console.log('check');
                        }}
                      />
                    ),
                    validate: FormStatus.valid,
                  },
                  {
                    title: 'Fill out the form',
                    component: (
                      <form noValidate>
                        <VStack spacing="20px" py="4" textAlign="left">
                          <CustomerForm useFormHooks={useFormHooks} />
                        </VStack>
                      </form>
                    ),
                    validate:
                      submitCount === 0
                        ? FormStatus.notSet
                        : Object.keys(errors).length === 0
                        ? FormStatus.valid
                        : FormStatus.invalid,
                  },
                ]}
              />
            </VStack>
            <VStack w="40%" spacing={4}>
              <AccordionInvoice title="Invoice" taxes={taxes} />
              <PromotionInputForm />
            </VStack>
          </Flex>
        </TopContextProvider>
      </Stack>
    </Container>
  );
};

export default Top;
