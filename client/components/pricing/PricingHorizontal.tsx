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
const plans = [
  {
    id: 1,
    title: 'Standard',
    options: [
      { id: 1, desc: 'up to 10 GB / mo' },
      { id: 2, desc: '30 min free call / mo' },
      { id: 3, desc: 'Unlimited Canada Calling' },
    ],
    selected: true,
    price: 30.0,
  },
  {
    id: 2,
    title: 'Gold',
    options: [
      { id: 1, desc: 'up to 50 GB / mo' },
      { id: 2, desc: '120 min free call / mo' },
      { id: 3, desc: 'Unlimited Canada/US Calling' },
    ],
    price: 70.0,
  },
  {
    id: 3,
    title: 'Platinum',
    options: [
      { id: 1, desc: 'unlimited data' },
      { id: 2, desc: 'free call' },
      { id: 3, desc: 'Unlimited International Calling' },
    ],
    price: 200.0,
  },
];
interface PackageTierProps {
  title: string;
  options: Array<{ id: number; desc: string }>;
  typePlan: number;
  selected?: boolean;
}

const PackageTier = ({
  title,
  options,
  typePlan,
  selected,
}: PackageTierProps) => {
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
    >
      <Heading as="p" size={'md'} width="25%">
        {title}
      </Heading>
      <List spacing={3} textAlign="start" width="50%">
        {options.map((desc) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading as="p" size={'md'} width="25%">
        ${typePlan.toFixed(2)}/mo
      </Heading>
    </Stack>
  );
};
const PricingHorizontal = () => {
  return (
    <Box>
      <Stack width={'100%'} direction={'column'}>
        {plans.map((p) => (
          <PackageTier
            key={p.id}
            title={p.title}
            typePlan={p.price}
            options={p.options}
            selected={p.selected}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default PricingHorizontal;
