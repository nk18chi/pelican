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
import {
  AccordionInvoice,
  DetailInvoice,
  SimpleInvoice,
} from '@/components/shared/Invoice';
import { TopNextPageProps } from 'pages';
import { PromotionInputForm } from '@/components/shared/Promotion';
import ProductList from '@/components/model/Product/ProductList';
import PricingHorizontal from '@/components/shared/Form/PricingHorizontal';
import { useCallback, useState } from 'react';
import { QueryProductFindMany_productFindMany } from '@/generated/QueryProductFindMany';
import PlanOptionCheckbox from '@/components/shared/Form/PlanOptionCheckbox';
import CustomerForm from '@/components/shared/Form/CustomerForm';
import { FormStatus } from '@/components/types/plan';
import { TSelectedOrder } from '.';
import useInvoiceCalculation from '@/components/function/hooks/useInvoiceCalculation';
import { QueryPlanOptionFindMany_planOptionFindMany } from '@/generated/QueryPlanOptionFindMany';
import StripeElement from '@/components/shared/Form/Stripe/StripeElement';

const Top: React.FC<TopNextPageProps> = ({
  products,
  taxes,
  plans,
  planOptions,
}) => {
  const [selectedOrder, setSelectedOrder] = useState<TSelectedOrder>({});
  const invoices = useInvoiceCalculation({ selectedOrder, taxes });
  const useFormHooks = useForm({ defaultValues: {} });
  const {
    handleSubmit,
    formState: { errors, submitCount },
  } = useFormHooks;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitForm = useCallback((data: any) => {
    console.log('submit', data);
  }, []);

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

  return (
    <Container maxW={'5xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        pt={{ base: 20, md: 12 }}
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
              handleSubmitButton={handleSubmit(submitForm)}
              accordionBlocks={[
                {
                  title: 'Choose your new phone (Optional)',
                  component: (
                    <ProductList
                      products={products}
                      selectedOrder={selectedOrder}
                      handleProductClick={(
                        product: QueryProductFindMany_productFindMany
                      ) =>
                        setSelectedOrder((prev) => ({
                          ...prev,
                          phone: product,
                        }))
                      }
                    />
                  ),
                  status: FormStatus.valid,
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
                  status: selectedOrder.plan
                    ? FormStatus.valid
                    : FormStatus.invalid,
                },
                {
                  title: 'Additional Options',
                  component: (
                    <PlanOptionCheckbox
                      planOptions={planOptions}
                      handleCheckboxChange={(checked, option) => {
                        let newOptions: QueryPlanOptionFindMany_planOptionFindMany[] =
                          selectedOrder.options
                            ? [...selectedOrder.options]
                            : [];
                        if (checked) newOptions.push(option);
                        else
                          newOptions = newOptions.filter(
                            (opt) => opt._id !== option._id
                          );
                        updateOrder({ options: newOptions });
                      }}
                    />
                  ),
                  status: FormStatus.valid,
                },
                {
                  title: 'Fill out customer form',
                  component: (
                    <form noValidate>
                      <VStack spacing="20px" py="4" textAlign="left">
                        <CustomerForm useFormHooks={useFormHooks} />
                      </VStack>
                    </form>
                  ),
                  handleClickNextButton: handleSubmit(submitForm),
                  status:
                    Object.keys(errors).length === 0
                      ? FormStatus.valid
                      : FormStatus.invalid,
                },
                {
                  title: 'Set up credit card',
                  component: (
                    <StripeElement
                      amount={Math.ceil(
                        (invoices.find((invoice) => invoice.id === '1')?.total
                          .value || 0) * 100
                      )}
                      noAmountMessage="Please select a plan first."
                    />
                  ),
                  status:
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
            <AccordionInvoice
              title="Invoice"
              StandardComponent={<SimpleInvoice invoices={invoices} />}
              DetailComponent={<DetailInvoice invoices={invoices} />}
            />
            <PromotionInputForm />
          </VStack>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Top;
