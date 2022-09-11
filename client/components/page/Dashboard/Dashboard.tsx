import { ApexOptions } from 'apexcharts';
import {
  SimpleGrid,
  Box,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { createIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';
import { DashboardNextPageProps } from 'pages/dashboard';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const lineChartData = [
  {
    name: 'Mobile apps',
    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
  },
  {
    name: 'Websites',
    data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
  },
];
const lineChartOptions: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: 'dark',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    labels: {
      style: {
        colors: '#c8cfca',
        fontSize: '12px',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#c8cfca',
        fontSize: '12px',
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.5,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ['#4FD1C5', '#2D3748'],
  },
  colors: ['#4FD1C5', '#2D3748'],
};

const WalletIcon = createIcon({
  displayName: 'WalletIcon',
  viewBox: '0 0 24 24',
  path: (
    <g>
      <path
        fill="currentColor"
        d="M4.447 4.818h14.062c.164 0 .328.01.491.031a2.9 2.9 0 00-3.406-2.441L4.03 4.382h-.013a2.9 2.9 0 00-1.805 1.149 3.848 3.848 0 012.236-.713zM18.51 5.875H4.446a2.816 2.816 0 00-2.813 2.812v8.438a2.816 2.816 0 002.813 2.812h14.062a2.815 2.815 0 002.813-2.812V8.687a2.815 2.815 0 00-2.813-2.812zm-2.088 8.437a1.406 1.406 0 110-2.811 1.406 1.406 0 010 2.811z"
      />
      <path
        fill="currentColor"
        d="M1.656 11.651V7.28c0-.952.528-2.549 2.358-2.895 1.553-.291 3.091-.291 3.091-.291s1.011.703.176.703-.813 1.077 0 1.077 0 1.032 0 1.032L4.007 10.62l-2.35 1.032z"
      />
    </g>
  ),
});

const Dashboard = (props: DashboardNextPageProps) => {
  console.log(props);
  const iconTeal = useColorModeValue('teal.300', 'teal.300');
  const textColor = useColorModeValue('gray.700', 'white');
  const iconBoxInside = useColorModeValue('white', 'white');
  return (
    <main>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
        <Box
          minH="83px"
          bg="white"
          boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
          borderRadius="15px"
          display="flex"
        >
          <Flex
            flexDirection="row"
            align="center"
            justify="center"
            w="100%"
            alignItems="center"
            p="0 24px"
          >
            <Stat me="auto">
              <StatLabel
                fontSize="sm"
                color="gray.400"
                fontWeight="bold"
                pb=".1rem"
              >
                Today&#39;s Moneys
              </StatLabel>
              <Flex>
                <StatNumber fontSize="lg" color={textColor}>
                  $53,000
                </StatNumber>
                <StatHelpText
                  alignSelf="flex-end"
                  justifySelf="flex-end"
                  m="0px"
                  color={'green.400'}
                  fontWeight="bold"
                  ps="3px"
                  fontSize="md"
                >
                  +55%
                </StatHelpText>
              </Flex>
            </Stat>
            <Flex
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={'12px'}
              h={'45px'}
              w={'45px'}
              bg={iconTeal}
            >
              <WalletIcon h={'24px'} w={'24px'} color={iconBoxInside} />
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>
      <Box
        mt={5}
        bg="white"
        boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
        borderRadius="15px"
        p="28px 10px 16px 0px"
        mb={{ sm: '26px', lg: '0px' }}
      >
        <Box mb="20px" pl="22px">
          <Flex direction="column" alignSelf="flex-start">
            <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
              Sales Overview
            </Text>
            <Text fontSize="md" fontWeight="medium" color="gray.400">
              <Text as="span" color="green.400" fontWeight="bold">
                5% more
              </Text>{' '}
              in 2021
            </Text>
          </Flex>
        </Box>
        <Box w="100%" h={{ sm: '300px' }} ps="8px">
          <ReactApexChart
            options={lineChartOptions}
            series={lineChartData}
            type="area"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </main>
  );
};

export default Dashboard;
