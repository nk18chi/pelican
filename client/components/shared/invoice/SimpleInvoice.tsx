import { QueryTaxFindMany_taxFindMany } from '@/generated/QueryTaxFindMany';
import { Heading, TableContainer, HStack } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { TSelectedPlan } from 'pages';
import { currencyFormat } from '@/components/function/utils/format';
import useInvoiceCalculation from '../../function/hooks/useInvoiceCalculation';

const styleEmphasize = css`
  font-weight: bold;
  font-size: 1.1rem;
`;

interface SimpleInvoiceProps {
  selectedPlan: TSelectedPlan;
  taxes: QueryTaxFindMany_taxFindMany[];
}

const SimpleInvoice = ({ taxes, selectedPlan }: SimpleInvoiceProps) => {
  const invoice = useInvoiceCalculation({ taxes, selectedPlan });
  return (
    <>
      {invoice.map((table) => (
        <TableContainer key={table.id} px="4%" py="2">
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
              {table.label}
            </Heading>
            <p css={styleEmphasize}>
              {currencyFormat({ n: table.total.value })}
            </p>
          </HStack>
        </TableContainer>
      ))}
    </>
  );
};

export default SimpleInvoice;
