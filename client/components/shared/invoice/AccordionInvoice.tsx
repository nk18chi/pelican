import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Divider,
} from '@chakra-ui/react';
import { SimpleInvoice, DetailInvoice, InvoiceProps } from '.';

const AccordionInvoice = ({ title, taxes, selectedPlan }: InvoiceProps) => {
  return (
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
                  {title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <Divider />
            {isExpanded ? (
              <DetailInvoice selectedPlan={selectedPlan} taxes={taxes} />
            ) : (
              <SimpleInvoice selectedPlan={selectedPlan} taxes={taxes} />
            )}
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionInvoice;
