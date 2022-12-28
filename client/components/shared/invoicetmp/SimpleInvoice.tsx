import { Heading, TableContainer, HStack } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { currencyFormat } from '@/components/function/utils/format';
import { InvoiceProps } from '.';

const styleEmphasize = css`
  font-weight: bold;
  font-size: 1.1rem;
`;

const SimpleInvoice = ({ invoices }: InvoiceProps) => {
  return (
    <>
      {invoices.map((invoice) => (
        <TableContainer key={invoice.id} px="4%" py="2">
          <HStack>
            <Heading
              as="h3"
              w="100%"
              fontWeight={600}
              fontSize={{
                base: 'xl',
                sm: 'xl',
                md: 'xl',
              }}
              lineHeight={'110%'}
              textAlign="left"
              mb={1}
            >
              {invoice.label}
            </Heading>
            <p css={styleEmphasize}>
              {currencyFormat({ n: invoice.total.value })}
            </p>
          </HStack>
        </TableContainer>
      ))}
    </>
  );
};

export default SimpleInvoice;
