import {
  Heading,
  TableContainer,
  Table,
  Tr,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { currencyFormat } from '@/components/function/utils/format';
import { InvoiceProps } from '.';

const DetailInvoice = ({ invoices }: InvoiceProps) => {
  return (
    <>
      {invoices.map((invoice) => (
        <TableContainer
          key={invoice.id}
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
            {invoice.label}
          </Heading>
          <Table size="sm">
            <Tbody>
              {invoice.details.map((detail) => (
                <Tr key={detail.id}>
                  <Td>{detail.label}</Td>
                  <Td isNumeric>{currencyFormat({ n: detail.value })}</Td>
                </Tr>
              ))}
              <Tr>
                <Td>{invoice.total.label}</Td>
                <Td isNumeric>{currencyFormat({ n: invoice.total.value })}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      ))}
    </>
  );
};

export default DetailInvoice;
