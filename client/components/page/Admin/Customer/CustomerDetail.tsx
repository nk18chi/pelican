import CustomerForm from '@/components/shared/Form/CustomerForm';
import {
  Avatar,
  Box,
  Flex,
  useColorModeValue,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Button,
} from '@chakra-ui/react';
import { CustomerDetailNextPageProps } from 'pages/admin/customer/[customerId]';
import { useForm } from 'react-hook-form';

const user = {
  _id: '1',
  name: 'John Smith',
  email: 'john@example.com',
  phone: +1604123456,
  product: {
    phone: 'iPhone 13',
    plan: 'Standard Plan',
    options: [
      { _id: '1', label: 'Device Protection' },
      { _id: '2', label: 'Premium Voicemail-To-Text' },
    ],
  },
  invoice: {
    lastPaymentAt: 'Jan, 1, 2022',
    lastPaymentAmount: '$100',
  },
  createdAt: 'Oct, 1, 2021',
};

const Detail = (props: CustomerDetailNextPageProps) => {
  console.log(props);
  const useFormHooks = useForm({ defaultValues: {} });
  const { handleSubmit } = useFormHooks;
  const textColor = useColorModeValue('gray.700', 'white');
  const lightGrayColor = useColorModeValue('gray.500', 'white');
  const borderProfileColor = useColorModeValue(
    'white',
    'rgba(255, 255, 255, 0.31)'
  );
  const bgProfile = useColorModeValue(
    'hsla(0,0%,100%,.8)',
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitForm = (data: any) => {
    console.log('submit', data);
  };

  return (
    <main>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        borderRadius="15px"
        p="20px"
      >
        <Flex
          direction={{ sm: 'column', md: 'column' }}
          w={{ sm: '90%', xl: '95%' }}
          justifyContent={{ sm: 'center', md: 'space-between' }}
          align="center"
          backdropFilter="saturate(200%) blur(50px)"
          boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
          border="2px solid"
          borderColor={borderProfileColor}
          bg={bgProfile}
          p="24px"
          borderRadius="20px"
        >
          <Flex
            align="center"
            mb={{ sm: '10px', md: '0px' }}
            direction={{ sm: 'column', md: 'row' }}
            w={{ sm: '100%' }}
            textAlign={{ sm: 'center', md: 'start' }}
          >
            <Avatar me={{ md: '22px' }} w="80px" h="80px" borderRadius="15px" />
            <Flex direction="column" maxWidth="100%" my={{ sm: '14px' }}>
              <Text
                fontSize={{ sm: 'lg', lg: 'xl' }}
                color={textColor}
                fontWeight="bold"
                ms={{ sm: '8px', md: '0px' }}
              >
                {user.name}
              </Text>
              <Text
                fontSize={{ sm: 'sm', md: 'md' }}
                color="gray.400"
                fontWeight="semibold"
              >
                {user.email}
              </Text>
              <Text
                fontSize={{ sm: 'sm', md: 'md' }}
                color="gray.400"
                fontWeight="semibold"
              >
                {user.phone}
              </Text>
            </Flex>
          </Flex>
          <Flex
            align="center"
            m={{ sm: '8px 0', md: '0px' }}
            direction={{ sm: 'column', md: 'row' }}
            w={{ sm: '100%' }}
            textAlign={{ sm: 'center', md: 'start' }}
          >
            <Tabs w={{ sm: '100%' }}>
              <TabList m={{ sm: '4px 0', md: '16px 0px' }}>
                <Tab>
                  <Text fontWeight="bold" fontSize="16">
                    User Profile
                  </Text>
                </Tab>
                <Tab>
                  <Text color={lightGrayColor} fontWeight="bold" fontSize="16">
                    Subscriptions
                  </Text>
                </Tab>
                <Tab>
                  <Text color={lightGrayColor} fontWeight="bold" fontSize="16">
                    Invoice
                  </Text>
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Stack spacing={4}>
                    <CustomerForm useFormHooks={useFormHooks} />
                    <Stack spacing={4} alignItems={'center'}>
                      <Button
                        mt={5}
                        bg={'blue.400'}
                        w={{ sm: '30%' }}
                        color={'white'}
                        _hover={{
                          bg: 'blue.500',
                        }}
                        onClick={handleSubmit(submitForm)}
                      >
                        Save
                      </Button>
                    </Stack>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <Text fontWeight="bold" fontSize="16">
                    Plans
                  </Text>
                  <Stack spacing={4} direction="row">
                    <p>plan list</p>
                  </Stack>
                  <Text fontWeight="bold" fontSize="16">
                    Plan Options
                  </Text>
                  <Stack spacing={4} direction="row">
                    <p>plan options list</p>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <p>invoice list</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Box>
    </main>
  );
};

export default Detail;
