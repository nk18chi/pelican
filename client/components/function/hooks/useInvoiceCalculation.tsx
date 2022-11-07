import { TopContext } from '@/components/page/Top/TopContextProvider';
import { defaultInvoiceTable, TInvoice } from '@/components/shared/Invoice';
import { QueryTaxFindMany_taxFindMany } from '@/generated/QueryTaxFindMany';
import { useState, useEffect, useContext } from 'react';

interface useInvoiceCalculationProps {
  taxes: QueryTaxFindMany_taxFindMany[];
}

const useInvoiceCalculation = ({ taxes }: useInvoiceCalculationProps) => {
  const [invoice, setInvoice] = useState(defaultInvoiceTable);
  const { selectedOrder } = useContext(TopContext);

  useEffect(() => {
    const monthlyInvoice: TInvoice = { ...defaultInvoiceTable[0], details: [] };
    const oneTimeInvoice: TInvoice = { ...defaultInvoiceTable[1], details: [] };

    if (selectedOrder?.plan) {
      monthlyInvoice.details.push({
        id: '1',
        label: `${selectedOrder?.plan.title} Plan`,
        value: selectedOrder?.plan.price,
      });
    }

    if (selectedOrder?.phone) {
      oneTimeInvoice.details.push({
        id: '1',
        label: selectedOrder?.phone.name,
        value: selectedOrder?.phone.price,
      });
      oneTimeInvoice.details.push({
        id: '2',
        label: 'Set Up Service Fee',
        value: 50,
      });
    }

    if (selectedOrder?.options) {
      selectedOrder?.options.forEach((opt) => {
        monthlyInvoice.details.push({
          id: opt._id,
          label: opt.label,
          value: opt.price,
        });
      });
    }

    // subtotal/taxes
    const calcTotal = (invoice: TInvoice) => {
      const subtotal = invoice.details
        .map((detail) => detail.value)
        .reduce((a, b) => a + b, 0);
      let total = subtotal;
      invoice.details.push({
        id: '10',
        label: 'Subtotal',
        value: subtotal,
      });
      taxes.forEach((tax) => {
        const taxValue = subtotal * tax.percentage;
        total += taxValue;
        invoice.details.push({
          id: tax._id,
          label: tax.label,
          value: taxValue,
        });
      });
      invoice.total.value = total;
    };
    calcTotal(monthlyInvoice);
    calcTotal(oneTimeInvoice);

    setInvoice((prev) => {
      return prev.map((p) => {
        return p.id === '1' ? monthlyInvoice : oneTimeInvoice;
      });
    });
  }, [taxes, selectedOrder]);

  return invoice;
};

export default useInvoiceCalculation;
