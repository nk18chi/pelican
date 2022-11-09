import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Divider,
} from '@chakra-ui/react';

export interface AccordionInvoiceProps {
  title?: string;
  StandardComponent: JSX.Element;
  DetailComponent: JSX.Element;
}
const AccordionInvoice = ({
  title,
  StandardComponent,
  DetailComponent,
}: AccordionInvoiceProps) => {
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
            {isExpanded ? DetailComponent : StandardComponent}
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionInvoice;
