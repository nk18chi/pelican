import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const AccordionItemBlock = ({ children, title }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: 'green.400', color: 'white' }}>
          <CheckCircleIcon mr="2" color="green.400" />
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>{children}</AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionItemBlock;
