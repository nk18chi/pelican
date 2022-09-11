import { TSelectedPlan } from '@/components/page/Top/Top';
import { defaultInvoiceTable, TInvoice } from '@/components/shared/invoice';
import { QueryTaxFindMany_taxFindMany } from '@/generated/QueryTaxFindMany';
import { useState, useEffect } from 'react';

interface useInvoiceCalculationProps {
  selectedPlan: TSelectedPlan;
  taxes: QueryTaxFindMany_taxFindMany[];
}

const useInvoiceCalculation = ({
  selectedPlan,
  taxes,
}: useInvoiceCalculationProps) => {
  const [invoice, setInvoice] = useState(defaultInvoiceTable);

  useEffect(() => {
    const monthlyInvoice: TInvoice = { ...defaultInvoiceTable[0], details: [] };
    const oneTimeInvoice: TInvoice = { ...defaultInvoiceTable[1], details: [] };

    if (selectedPlan.plan) {
      monthlyInvoice.details.push({
        id: '1',
        label: `${selectedPlan.plan.title} Plan`,
        value: selectedPlan.plan.price,
      });
    }

    if (selectedPlan.phone) {
      oneTimeInvoice.details.push({
        id: '1',
        label: selectedPlan.phone.name,
        value: selectedPlan.phone.price,
      });
      oneTimeInvoice.details.push({
        id: '2',
        label: 'Set Up Service Fee',
        value: 50,
      });
    }

    if (selectedPlan.options.length > 0) {
      selectedPlan.options.forEach((opt) => {
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
  }, [taxes, selectedPlan]);

  return invoice;
};

export default useInvoiceCalculation;
