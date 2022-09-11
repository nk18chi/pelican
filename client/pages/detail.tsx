import type { NextPage } from 'next';
import Head from 'next/head';
import SidebarWithHeader from '@/components/shared/footer/SidebarWithHeader';
import Footer from '../components/shared/footer/Footer';
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
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

const Home: NextPage = () => {
  const textColor = useColorModeValue('gray.700', 'white');
  const borderProfileColor = useColorModeValue(
    'white',
    'rgba(255, 255, 255, 0.31)'
  );
  const bgProfile = useColorModeValue(
    'hsla(0,0%,100%,.8)',
    'linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)'
  );
  const headlineColor = useColorModeValue('gray.500', 'white');
  const lightGrayColor = useColorModeValue('gray.500', 'white');
  const labelColor = useColorModeValue('gray.600', 'white');
  const whiteColor = useColorModeValue('gray.100', 'white');

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SidebarWithHeader>
          <Box
            bgImage="assets/img/ProfileBackground.png"
            w="100%"
            h="300px"
            bgPosition="50%"
            bgRepeat="no-repeat"
            display="flex"
            justifyContent="start"
            alignItems="center"
          >
            <Text
              color={whiteColor}
              fontWeight="bold"
              fontSize="32"
              p="0 0 60px 40px"
            >
              User Profile
            </Text>
          </Box>
          <Flex
            direction={{ sm: 'column', md: 'column' }}
            mx="1.5rem"
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
            transform={{
              sm: 'translateY(-45%)',
              md: 'translateY(-60%)',
              lg: 'translateY(-100px)',
            }}
          >
            <Flex
              align="center"
              mb={{ sm: '10px', md: '0px' }}
              direction={{ sm: 'column', md: 'row' }}
              w={{ sm: '100%' }}
              textAlign={{ sm: 'center', md: 'start' }}
            >
              <Avatar
                me={{ md: '22px' }}
                src="assets/img/avatars/avatar4.png"
                w="80px"
                h="80px"
                borderRadius="15px"
              />
              <Flex direction="column" maxWidth="100%" my={{ sm: '14px' }}>
                <Text
                  fontSize={{ sm: 'lg', lg: 'xl' }}
                  color={textColor}
                  fontWeight="bold"
                  ms={{ sm: '8px', md: '0px' }}
                >
                  name
                </Text>
                <Text
                  fontSize={{ sm: 'sm', md: 'md' }}
                  color={textColor}
                  fontWeight="semibold"
                >
                  email
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
                    <Text
                      color={lightGrayColor}
                      fontWeight="bold"
                      fontSize="16"
                    >
                      Subscriptions
                    </Text>
                  </Tab>
                  <Tab>
                    <Text
                      color={lightGrayColor}
                      fontWeight="bold"
                      fontSize="16"
                    >
                      Invoice
                    </Text>
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Stack spacing={4}>
                      <Text
                        fontWeight="bold"
                        fontSize="16"
                        color={headlineColor}
                      >
                        Category
                      </Text>
                      <Stack spacing={4} direction="row">
                        <FormControl id="email">
                          <FormLabel color={labelColor}>
                            Email address
                          </FormLabel>
                          <Input
                            type="email"
                            boxShadow="0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)"
                          />
                        </FormControl>
                        <FormControl id="password">
                          <FormLabel color={labelColor}>Password</FormLabel>
                          <Input
                            type="password"
                            boxShadow="0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%)"
                          />
                        </FormControl>
                      </Stack>
                      <Stack spacing={4} alignItems={'center'}>
                        <Button
                          mt={5}
                          bg={'blue.400'}
                          w={{ sm: '30%' }}
                          color={'white'}
                          _hover={{
                            bg: 'blue.500',
                          }}
                        >
                          Save
                        </Button>
                      </Stack>
                    </Stack>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </Flex>
        </SidebarWithHeader>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
