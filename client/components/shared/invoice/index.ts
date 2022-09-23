import { QueryTaxFindMany_taxFindMany } from '@/generated/QueryTaxFindMany';
import { TSelectedPlan } from '@/components/page/Top/Top';

export { default as SimpleInvoice } from './SimpleInvoice';
export { default as DetailInvoice } from './DetailInvoice';
export { default as AccordionInvoice } from './AccordionInvoice';

export type TInvoice = {
  id: string;
  label: string;
  details: {
    id: string;
    label: string;
    value: number;
  }[];
  total: {
    label: string;
    value: number;
  };
};

export const defaultInvoiceTable: TInvoice[] = [
  {
    id: '1',
    label: 'Monthly Fees',
    details: [],
    total: { label: 'Total', value: 0 },
  },
  {
    id: '2',
    label: 'One-Time Fees',
    details: [],
    total: { label: 'Total', value: 0 },
  },
];

export interface InvoiceProps {
  title?: string;
  selectedPlan: TSelectedPlan;
  taxes: QueryTaxFindMany_taxFindMany[];
}
