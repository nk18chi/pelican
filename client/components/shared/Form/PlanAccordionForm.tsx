import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
  ExpandedIndex,
  Stack,
} from '@chakra-ui/react';
import { CheckCircleIcon, EditIcon, NotAllowedIcon } from '@chakra-ui/icons';
import { FormStatus } from '../../types/plan';
import { memo, useState } from 'react';
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
interface PlanAccordionFormProps {
  accordionBlocks: {
    title: string;
    component: JSX.Element;
    validate: FormStatus;
  }[];
  handleSubmitButton: () => void;
}

const PlanAccordionForm = memo(
  ({ accordionBlocks, handleSubmitButton }: PlanAccordionFormProps) => {
    const [accordionIndex, setAccordionIndex] = useState<ExpandedIndex>(0);
    const [accordionStatus, setAccordionStatus] = useState<FormStatus[]>([
      FormStatus.notSet,
      FormStatus.notSet,
      FormStatus.notSet,
      FormStatus.notSet,
    ]);

    const handleClickNextButton = (i: number, status: FormStatus) => {
      setAccordionStatus((prev) => {
        const newPrev = [...prev];
        newPrev[i] = status;
        return newPrev;
      });
      if (status === FormStatus.valid) setAccordionIndex(i + 1);
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
                        colorScheme="teal"
                        size="md"
                        onClick={() =>
                          handleClickNextButton(i, accordion.validate)
                        }
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
            disabled={accordionStatus.every(
              (status) => status === FormStatus.valid
            )}
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
