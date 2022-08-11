import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import { CheckCircleIcon, EditIcon, NotAllowedIcon } from '@chakra-ui/icons';
import { FormStatus } from 'types/plan';

interface Props {
  title: string;
  children: JSX.Element;
  status: FormStatus;
}

const AccordionItemBlock = ({ children, title, status }: Props) => {
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
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton _expanded={{ bg: 'green.400', color: 'white' }}>
              {getStatusIcon(status, isExpanded)}
              <Box flex="1" textAlign="left">
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

export default AccordionItemBlock;
