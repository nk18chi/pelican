import {
  Heading,
  TableContainer,
  Table,
  Tr,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { currencyFormat } from '@/components/function/utils/format';
import useInvoiceCalculation from '@/components/function/hooks/useInvoiceCalculation';
import { InvoiceProps } from '.';

const DetailInvoice = ({ taxes, selectedPlan }: InvoiceProps) => {
  const invoice = useInvoiceCalculation({ taxes, selectedPlan });
  return (
    <>
      {invoice.map((table) => (
        <TableContainer
          key={table.id}
          px="4%"
          py="4"
          my="4"
          rounded="lg"
          bg="white"
        >
          <Heading
            as="h3"
            w="100%"
            fontWeight={600}
            fontSize={{ base: 'xl', sm: 'xl', md: 'xl' }}
            lineHeight={'110%'}
            textAlign="left"
            mb={1}
          >
            {table.label}
          </Heading>
          <Table size="sm">
            <Tbody>
              {table.details.map((detail) => (
                <Tr key={detail.id}>
                  <Td>{detail.label}</Td>
                  <Td isNumeric>{currencyFormat({ n: detail.value })}</Td>
                </Tr>
              ))}
              <Tr>
                <Td>{table.total.label}</Td>
                <Td isNumeric>{currencyFormat({ n: table.total.value })}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      ))}
    </>
  );
};

export default DetailInvoice;
