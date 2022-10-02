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
  Icon,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { DashboardNextPageProps } from 'pages/admin/dashboard';
import { WalletIcon } from '@/components/shared/Icon';
import { FaUserFriends, FaUserMinus, FaUserPlus } from 'react-icons/fa';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type Tdata = {
  kpis: {
    key: string;
    label: string;
    number: string;
    percentage?: string;
    icon: JSX.Element;
  }[];
  graph: {
    key: string;
    label: string;
    percentage: string;
    term: string;
    lineChartData: {
      name: string;
      data: number[];
    }[];
    lineChartOptions: ApexOptions;
  }[];
};

const data: { admin: Tdata; customer: Tdata } = {
  admin: {
    kpis: [
      {
        key: 'sales',
        label: 'Sales',
        number: '$53,000',
        percentage: '+55%',
        icon: <WalletIcon />,
      },
      {
        key: 'totalSubscriber',
        label: 'Total Subscribers',
        number: '1,000',
        percentage: '+10%',
        icon: <Icon as={FaUserFriends} />,
      },
      {
        key: 'newSubscribers',
        label: 'New Subscribers',
        number: '20',
        percentage: '-10%',
        icon: <Icon as={FaUserPlus} />,
      },
      {
        key: 'unsubscriber',
        label: 'Unsubscribers',
        number: '2',
        percentage: '-10%',
        icon: <Icon as={FaUserMinus} />,
      },
    ],
    graph: [
      {
        key: 'sales',
        label: 'Sales Overview',
        percentage: '5% more',
        term: 'in 2021',
        lineChartData: [
          {
            name: 'Mobile apps',
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          },
          {
            name: 'Websites',
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
          },
        ],
        lineChartOptions: {
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
        },
      },
    ],
  },
  customer: {
    kpis: [
      {
        key: 'maxData',
        label: 'Max Data',
        number: '10 GB',
        icon: <WalletIcon />,
      },
      {
        key: 'usedData',
        label: 'Used Data',
        number: '1 GB',
        percentage: '+10%',
        icon: <Icon as={FaUserFriends} />,
      },
      {
        key: 'payment',
        label: 'Payment',
        number: '$100',
        icon: <Icon as={FaUserPlus} />,
      },
    ],
    graph: [
      {
        key: 'data',
        label: 'Data Overview',
        percentage: '5% more',
        term: 'in 2021',
        lineChartData: [
          {
            name: 'Mobile apps',
            data: [50, 40, 100, 22, 50, 25, 40, 80, 90],
          },
          {
            name: 'Max Data',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
          },
        ],
        lineChartOptions: {
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
        },
      },
    ],
  },
};

const Dashboard = (props: DashboardNextPageProps) => {
  console.log(props);
  const iconTeal = useColorModeValue('teal.300', 'teal.300');
  const textColor = useColorModeValue('gray.700', 'white');
  const iconBoxInside = useColorModeValue('white', 'white');
  const userRole = 'admin';
  return (
    <main>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
        {data[userRole].kpis.map((kpi) => (
          <Box
            key={kpi.key}
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
                  {kpi.label}
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor}>
                    {kpi.number}
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
                    {kpi.percentage}
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
                color={iconBoxInside}
              >
                {kpi.icon}
              </Flex>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      {data[userRole].graph.map((graph) => (
        <Box
          key={graph.key}
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
                {graph.label}
              </Text>
              <Text fontSize="md" fontWeight="medium" color="gray.400">
                <Text as="span" color="green.400" fontWeight="bold">
                  {graph.percentage}
                </Text>{' '}
                {graph.term}
              </Text>
            </Flex>
          </Box>
          <Box w="100%" h={{ sm: '300px' }} ps="8px">
            <ReactApexChart
              options={graph.lineChartOptions}
              series={graph.lineChartData}
              type="area"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      ))}
    </main>
  );
};

export default Dashboard;
