import { QueryPlanFindMany_planFindMany } from '@/generated/QueryPlanFindMany';
import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { currencyFormat } from '@/components/function/utils/format';
interface Handler {
  handleClick: (plan: QueryPlanFindMany_planFindMany) => void;
}
interface PackageTierProps extends Handler {
  plan: QueryPlanFindMany_planFindMany;
  selected: boolean;
}

const PackageTier = ({ plan, selected, handleClick }: PackageTierProps) => {
  const { title, options, price } = plan;
  return (
    <Stack
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}
      bg={useColorModeValue('white', 'gray.800')}
      borderWidth={selected ? '2px' : '1px'}
      borderColor={selected ? 'green.400' : 'inherit'}
      rounded="lg"
      shadow="lg"
      cursor="pointer"
      onClick={() => handleClick(plan)}
    >
      <Heading as="p" size={'md'} width="25%">
        {title}
      </Heading>
      <List spacing={3} textAlign="start" width="50%">
        {options?.map((option, i) => (
          <ListItem key={i}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {option?.desc}
          </ListItem>
        ))}
      </List>
      <Heading as="p" size={'md'} width="25%">
        {currencyFormat({ n: price })}/mo
      </Heading>
    </Stack>
  );
};

interface TProps extends Handler {
  plans: QueryPlanFindMany_planFindMany[];
  selectedId?: string;
}

const PricingHorizontal = ({ plans, selectedId, handleClick }: TProps) => {
  return (
    <Box>
      <Stack width={'100%'} direction={'column'}>
        {plans.map((p) => (
          <PackageTier
            key={p._id}
            plan={p}
            selected={p._id === selectedId}
            handleClick={handleClick}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default PricingHorizontal;
