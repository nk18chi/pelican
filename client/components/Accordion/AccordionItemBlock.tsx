import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

interface Props {
  title: string;
  children: JSX.Element;
}

const AccordionItemBlock = ({ children, title }: Props) => {
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
