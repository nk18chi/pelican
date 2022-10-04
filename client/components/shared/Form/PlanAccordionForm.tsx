import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Grid,
  GridItem,
  ExpandedIndex,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { CheckCircleIcon, EditIcon, NotAllowedIcon } from '@chakra-ui/icons';
import { FormStatus } from '../../types/plan';
import Product from '../../model/Product/Product';
import PricingHorizontal from './PricingHorizontal';
import { Dispatch, SetStateAction, useState } from 'react';
import { QueryProductFindMany_productFindMany } from '@/generated/QueryProductFindMany';
import { QueryPlanFindMany_planFindMany } from '@/generated/QueryPlanFindMany';
import { QueryPlanOptionFindMany_planOptionFindMany } from '@/generated/QueryPlanOptionFindMany';
import { useForm } from 'react-hook-form';
import { currencyFormat } from '../../function/utils/format';
import { TSelectedPlan } from '@/components/page/Top/Top';
import { css } from '@emotion/react';
import CustomerForm from './CustomerForm';

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

interface PlanAccordionFormProps {
  products: QueryProductFindMany_productFindMany[];
  plans: QueryPlanFindMany_planFindMany[];
  planOptions: QueryPlanOptionFindMany_planOptionFindMany[];
  selectedPlan: TSelectedPlan;
  setSelectedPlan: Dispatch<SetStateAction<TSelectedPlan>>;
}

type TPlanAccodion = {
  title: string;
  content: JSX.Element;
};

const PlanAccordionForm = ({
  products,
  plans,
  planOptions,
  selectedPlan,
  setSelectedPlan,
}: PlanAccordionFormProps) => {
  const [accordionIndex, setAccordionIndex] = useState<ExpandedIndex>(0);
  const [accordionStatus, setAccordionStatus] = useState<FormStatus[]>([
    FormStatus.notSet,
    FormStatus.notSet,
    FormStatus.notSet,
  ]);
  const useFormHooks = useForm({ defaultValues: {} });
  const {
    handleSubmit,
    formState: { errors, submitCount },
  } = useFormHooks;

  const planAccordions: TPlanAccodion[] = [
    {
      title: 'Choose your new phone (Optional)',
      content: (
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
      ),
    },
    {
      title: 'Choose your plan',
      content: (
        <PricingHorizontal
          plans={plans}
          selectedId={selectedPlan.plan?._id}
          handleClick={(plan) => {
            setSelectedPlan((prev) => ({
              ...prev,
              plan,
            }));
            setAccordionStatus((prev) => {
              const newPrev = [...prev];
              newPrev[1] = FormStatus.valid;
              return newPrev;
            });
          }}
        />
      ),
    },
    {
      title: 'Additional Options',
      content: (
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
        </Stack>
      ),
    },
    {
      title: 'Fill out the form',
      content: (
        <form noValidate>
          <VStack spacing="20px" py="4" textAlign="left">
            <CustomerForm useFormHooks={useFormHooks} />
          </VStack>
        </form>
      ),
    },
  ];

  const showAccordionStatus = (i: number) => {
    if (i === 3) {
      return submitCount === 0
        ? FormStatus.notSet
        : Object.keys(errors).length === 0
        ? FormStatus.valid
        : FormStatus.invalid;
    }
    return accordionStatus[i];
  };

  const clickAccordionNextButton = (i: number) => {
    switch (i) {
      case 1:
        setAccordionStatus((prev) => {
          const newPrev = [...prev];
          newPrev[i] = selectedPlan.plan
            ? FormStatus.valid
            : FormStatus.invalid;
          return newPrev;
        });
        if (selectedPlan.plan) setAccordionIndex(i + 1);
        break;
      default:
        setAccordionStatus((prev) => {
          const newPrev = [...prev];
          newPrev[i] = FormStatus.valid;
          return newPrev;
        });
        setAccordionIndex(i + 1);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitForm = (data: any) => {
    console.log('submit', data);
  };

  return (
    <>
      <Accordion
        w="100%"
        allowToggle
        index={accordionIndex}
        textAlign={'center'}
        onChange={(id: ExpandedIndex) => setAccordionIndex(id)}
        css={stylePage}
      >
        {planAccordions.map((accordion, i, { length }) => {
          return (
            <AccordionItemBlock
              key={`accordion_${i}`}
              id={`accordion$_{i}`}
              title={accordion.title}
              status={showAccordionStatus(i)}
            >
              <>
                {accordion.content}
                {i + 1 < length && (
                  <Button
                    key={`nextButton_${i}`}
                    id={`nextButton_${i}`}
                    colorScheme="teal"
                    size="md"
                    onClick={() => clickAccordionNextButton(i)}
                  >
                    Next
                  </Button>
                )}
              </>
            </AccordionItemBlock>
          );
        })}
      </Accordion>
      <Stack
        spacing={4}
        direction="row"
        align="center"
        justifyContent={'center'}
        pt={4}
        pb={8}
      >
        <Button
          id="checkoutButton"
          colorScheme="teal"
          size="lg"
          disabled={!(selectedPlan.plan && Object.keys(errors).length === 0)}
          onClick={handleSubmit(submitForm)}
        >
          Proceed to Checkout
        </Button>
      </Stack>
    </>
  );
};

interface AccordionItemBlockProps {
  id: string;
  title: string;
  children: JSX.Element;
  status: FormStatus;
}

const AccordionItemBlock = ({
  children,
  id,
  title,
  status,
}: AccordionItemBlockProps) => {
  const getStatusIcon = (status: FormStatus, isExpanded: boolean) => {
    switch (status) {
      case FormStatus.valid:
        return (
          <CheckCircleIcon
            mr="2"
            color={isExpanded ? 'white.400' : 'green.400'}
          />
        );
      case FormStatus.invalid:
        return (
          <NotAllowedIcon mr="2" color={isExpanded ? 'white.400' : 'red.400'} />
        );
      case FormStatus.notSet:
        return (
          <EditIcon mr="2" color={isExpanded ? 'white.400' : 'gray.400'} />
        );
      default:
        return null;
    }
  };
  return (
    <AccordionItem id={id}>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              _expanded={{
                bg: status === FormStatus.invalid ? 'red.400' : 'green.400',
                color: 'white',
              }}
            >
              {getStatusIcon(status, isExpanded)}
              <Box
                flex="1"
                textAlign="left"
                color={isExpanded ? 'white.400' : 'unset'}
              >
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>{children}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default PlanAccordionForm;
