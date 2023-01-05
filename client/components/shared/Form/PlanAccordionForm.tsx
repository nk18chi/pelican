import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
  Stack,
} from '@chakra-ui/react';
import { CheckCircleIcon, EditIcon, NotAllowedIcon } from '@chakra-ui/icons';
import { FormStatus } from '../../types/plan';
import { memo, useEffect, useState } from 'react';
import { css } from '@emotion/react';

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

type TaccordionBlocks = {
  title: string;
  component: JSX.Element;
  status: FormStatus;
  isSubmitted?: boolean;
  handleClickNextButton?: () => Promise<void>;
};

interface PlanAccordionFormProps {
  accordionBlocks: TaccordionBlocks[];
  handleSubmitButton: () => void;
}

const PlanAccordionForm = memo(
  ({ accordionBlocks, handleSubmitButton }: PlanAccordionFormProps) => {
    const [accordionIndex, setAccordionIndex] = useState<number>(0);
    const [accordionStatus, setAccordionStatus] = useState<FormStatus[]>(
      new Array(accordionBlocks.length).fill(FormStatus.notSet)
    );
    const [accordionSubmitted, setAccordionSubmitted] = useState<boolean[]>(
      new Array(accordionBlocks.length).fill(false)
    );

    useEffect(() => {
      setAccordionStatus((prev) =>
        accordionSubmitted.map((isSubmitted, index) => {
          const status: FormStatus = isSubmitted
            ? accordionBlocks[index].status
            : prev[index];
          return status;
        })
      );
    }, [accordionSubmitted, accordionBlocks]);

    useEffect(() => {
      setAccordionIndex((prev) => {
        if (
          accordionSubmitted[prev] &&
          accordionStatus[prev] === FormStatus.valid
        )
          return prev + 1;
        return prev;
      });
    }, [accordionSubmitted, accordionStatus]);

    return (
      <>
        <Accordion
          w="100%"
          allowToggle
          index={accordionIndex}
          textAlign={'center'}
          onChange={(id: number) => setAccordionIndex(id)}
          css={stylePage}
        >
          {accordionBlocks.map((accordion, i, { length }) => {
            return (
              <AccordionItemBlock
                key={`accordion_${i}`}
                id={`accordion_${i}`}
                title={accordion.title}
                status={accordionStatus[i]}
              >
                <>
                  {accordion.component}
                  {i + 1 < length && (
                    <Box mt={2} textAlign="right">
                      <Button
                        key={`nextButton_${i}`}
                        id={`nextButton_${i}`}
                        data-testid={`nextButton_${i}`}
                        colorScheme="teal"
                        size="md"
                        onClick={async () => {
                          if (accordion.handleClickNextButton)
                            await accordion.handleClickNextButton();
                          setAccordionSubmitted((prev) => {
                            const newPrev = [...prev];
                            newPrev[i] = true;
                            return newPrev;
                          });
                        }}
                      >
                        Next
                      </Button>
                    </Box>
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
            disabled={accordionStatus
              .slice(0, accordionBlocks.length - 1)
              .some((status) => status !== FormStatus.valid)}
            onClick={handleSubmitButton}
          >
            Proceed to Checkout
          </Button>
        </Stack>
      </>
    );
  }
);
PlanAccordionForm.displayName = 'PlanAccordionForm';

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
              data-testid={`accordion-button-${id}`}
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
          <AccordionPanel data-testid={`accordion-panel-${id}`}>
            {children}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default PlanAccordionForm;
