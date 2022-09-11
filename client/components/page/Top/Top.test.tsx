import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Top from './Top';
import { QueryProductFindMany_productFindMany } from '@/generated/QueryProductFindMany';
import { QueryPlanFindMany_planFindMany } from '@/generated/QueryPlanFindMany';
import { currencyFormat } from '@/components/function/utils/format';
import { QueryPlanOptionFindMany_planOptionFindMany } from '@/generated/QueryPlanOptionFindMany';
import { QueryTaxFindMany_taxFindMany } from '@/generated/QueryTaxFindMany';
const productDummy: QueryProductFindMany_productFindMany[] = [
  {
    __typename: 'Products',
    _id: '6134262fb7601fc4de2356e0',
    isNewItem: true,
    imageURL: '/assets/img/phones/phone-1.png',
    name: 'iPhone 13',
    price: 1800,
    rating: 4.8,
    numReviews: 134,
  },
  {
    __typename: 'Products',
    _id: '6134262fb7601fc4de2356e1',
    isNewItem: true,
    imageURL: 'assets/img/phones/phone-2.png',
    name: 'Goolge Pixel 6a',
    price: 1000,
    rating: 4.7,
    numReviews: 42,
  },
];

const planDummy: QueryPlanFindMany_planFindMany[] = [
  {
    __typename: 'Plans',
    _id: '6134262fb7601fc4de2356c0',
    title: 'Standard',
    options: [
      { __typename: 'PlansOptions', desc: 'up to 10 GB / mo' },
      { __typename: 'PlansOptions', desc: '30 min free call / mo' },
      { __typename: 'PlansOptions', desc: 'Unlimited Canada Calling' },
    ],
    price: 30.0,
  },
  {
    __typename: 'Plans',
    _id: '6134262fb7601fc4de2356c1',
    title: 'Gold',
    options: [
      { __typename: 'PlansOptions', desc: 'up to 50 GB / mo' },
      { __typename: 'PlansOptions', desc: '120 min free call / mo' },
      { __typename: 'PlansOptions', desc: 'Unlimited Canada/US Calling' },
    ],
    price: 70.0,
  },
];

const planOptionDummy: QueryPlanOptionFindMany_planOptionFindMany[] = [
  {
    __typename: 'PlanOptions',
    _id: '6134262fb7601fc4de2356b0',
    label: 'Device Protection',
    price: 6.99,
  },
  {
    __typename: 'PlanOptions',
    _id: '6134262fb7601fc4de2356b1',
    label: 'Premium Voicemail-To-Text',
    price: 15,
  },
];

const taxesDummy: QueryTaxFindMany_taxFindMany[] = [
  {
    __typename: 'Taxes',
    _id: '6134262fb7601fc4de2356a0',
    label: 'GST/HST',
    percentage: 0.05,
  },
  {
    __typename: 'Taxes',
    _id: '6134262fb7601fc4de2356a1',
    label: 'PST/QST',
    percentage: 0.07,
  },
];

const addTaxes = (n: number): number => {
  let total = n;
  taxesDummy.forEach((tax) => {
    total += tax.percentage * n;
  });
  return total;
};

const invoices: string[][] = [[], []];

describe('Top Page', () => {
  it('renders the headline', () => {
    render(<Top products={[]} taxes={[]} plans={[]} planOptions={[]} />);
    const heading1 = screen.getByText(/Looking for a new plan?/i);
    expect(heading1).toBeInTheDocument();
    const heading2 = screen.getByText(/Build Your Plan/i);
    expect(heading2).toBeInTheDocument();
  });
  it('renders the invoice(monthly/one-time fees) as 0 for each before choosing any products', () => {
    render(<Top products={[]} taxes={[]} plans={[]} planOptions={[]} />);
    const monthlyLabel = screen.getByText(/Monthly Fees/i);
    expect(monthlyLabel).toBeInTheDocument();
    const monthlyPrice = monthlyLabel.nextSibling;
    expect(monthlyPrice).toHaveTextContent('$0.00');

    const oneTimeLabel = screen.getByText(/One-Time Fees/i);
    expect(oneTimeLabel).toBeInTheDocument();
    const oneTimePrice = oneTimeLabel.nextSibling;
    expect(oneTimePrice).toHaveTextContent('$0.00');
  });
  it('renders the checkout button as disable button before filling out the form', () => {
    render(<Top products={[]} taxes={[]} plans={[]} planOptions={[]} />);
    const button = screen.getByText(/Proceed to Checkout/i);
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
  it('able to fill out the form while calculating invoices(monthly/one-time) based on the form', () => {
    const { container } = render(
      <Top
        products={productDummy}
        taxes={taxesDummy}
        plans={planDummy}
        planOptions={planOptionDummy}
      />
    );

    // check if items from db show up
    productDummy.forEach((p) => {
      const item = screen.getByText(`${p.name}`);
      expect(item).toBeInTheDocument();
    });
    planDummy.forEach((p) => {
      const item = screen.getByText(`${p.title}`);
      expect(item).toBeInTheDocument();
    });
    planOptionDummy.forEach((p) => {
      const item = screen.getByText(`${p.label}`);
      expect(item).toBeInTheDocument();
    });

    // check if invoice shows up
    const monthlyLabel = screen.getByText(/Monthly Fees/i);
    expect(monthlyLabel).toBeInTheDocument();
    const oneTimeLabel = screen.getByText(/One-Time Fees/i);
    expect(oneTimeLabel).toBeInTheDocument();

    // check if invoice is initially zero.
    const monthlyFeeEle = monthlyLabel.nextSibling;
    const oneTimeFeeEle = oneTimeLabel.nextSibling;
    let monthlyFee = 0;
    let oneTimeFee = 0;
    expect(monthlyFeeEle).toHaveTextContent(currencyFormat({ n: monthlyFee }));
    expect(oneTimeFeeEle).toHaveTextContent(currencyFormat({ n: oneTimeFee }));

    // check if invoice has changed when selecting a phone.
    fireEvent.click(screen.getByText(`${productDummy[0].name}`));
    oneTimeFee += productDummy[0].price;
    oneTimeFee += 50; // $50 for setup service
    expect(monthlyFeeEle).toHaveTextContent(
      currencyFormat({ n: addTaxes(monthlyFee) })
    );
    expect(oneTimeFeeEle).toHaveTextContent(
      currencyFormat({ n: addTaxes(oneTimeFee) })
    );
    invoices[1].push(productDummy[0].name);
    invoices[1].push(currencyFormat({ n: productDummy[0].price }));
    invoices[1].push('Set Up Service Fee');
    invoices[1].push(currencyFormat({ n: 50 }));

    // check if invoice has changed when selecting a plan.
    fireEvent.click(screen.getByText(`${planDummy[0].title}`));
    monthlyFee += planDummy[0].price;
    expect(monthlyFeeEle).toHaveTextContent(
      currencyFormat({ n: addTaxes(monthlyFee) })
    );
    expect(oneTimeFeeEle).toHaveTextContent(
      currencyFormat({ n: addTaxes(oneTimeFee) })
    );
    invoices[0].push(planDummy[0].title);
    invoices[0].push(currencyFormat({ n: planDummy[0].price }));

    // check if invoice has changed when selecting plan options.
    fireEvent.click(screen.getByText(`${planOptionDummy[0].label}`));
    monthlyFee += planOptionDummy[0].price;
    expect(monthlyFeeEle).toHaveTextContent(
      currencyFormat({ n: addTaxes(monthlyFee) })
    );
    expect(oneTimeFeeEle).toHaveTextContent(
      currencyFormat({ n: addTaxes(oneTimeFee) })
    );
    invoices[0].push(planOptionDummy[0].label);
    invoices[0].push(currencyFormat({ n: planOptionDummy[0].price }));

    fireEvent.click(screen.getByText(`${planOptionDummy[1].label}`));
    monthlyFee += planOptionDummy[1].price;
    expect(monthlyFeeEle).toHaveTextContent(
      currencyFormat({ n: addTaxes(monthlyFee) })
    );
    expect(oneTimeFeeEle).toHaveTextContent(
      currencyFormat({ n: addTaxes(oneTimeFee) })
    );
    fireEvent.click(screen.getByText(`${planOptionDummy[1].label}`));
    monthlyFee -= planOptionDummy[1].price;
    expect(monthlyFeeEle).toHaveTextContent(
      currencyFormat({ n: addTaxes(monthlyFee) })
    );
    expect(oneTimeFeeEle).toHaveTextContent(
      currencyFormat({ n: addTaxes(oneTimeFee) })
    );

    // check if the invoice detail table is correct
    invoices[0].push('Subtotal');
    invoices[0].push(currencyFormat({ n: monthlyFee }));
    invoices[1].push('Subtotal');
    invoices[1].push(currencyFormat({ n: oneTimeFee }));
    taxesDummy.forEach((tax) => {
      invoices[0].push(tax.label);
      invoices[0].push(currencyFormat({ n: monthlyFee * tax.percentage }));
      invoices[1].push(tax.label);
      invoices[1].push(currencyFormat({ n: oneTimeFee * tax.percentage }));
    });
    invoices[0].push('Total');
    invoices[0].push(currencyFormat({ n: addTaxes(monthlyFee) }));
    invoices[1].push('Total');
    invoices[1].push(currencyFormat({ n: addTaxes(oneTimeFee) }));
    const invoiceButton = screen.getByText('Invoice', {
      selector: 'div',
    });
    expect(invoiceButton).toBeInTheDocument();
    fireEvent.click(invoiceButton);
    const invoiceTables = container.querySelectorAll('.chakra-table');
    invoiceTables.forEach((table, i) => {
      table.querySelectorAll('td').forEach((td, j) => {
        expect(td).toHaveTextContent(invoices[i][j]);
      });
    });

    // check if phone/email/password are already set up
    const phoneEle = container.querySelector('.react-tel-input input');
    expect(phoneEle).toHaveDisplayValue([/\+1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}/]);
    const emailEle = container.querySelector('#email');
    expect(emailEle).toHaveDisplayValue([
      /yourphone\+1-[0-9]{3}-[0-9]{3}-[0-9]{4}@example.com/,
    ]);
    const passwordEle = container.querySelector('#password');
    expect(passwordEle).toHaveDisplayValue([/buildyourplan/]);

    // check if the submit button works after typing first/last name
    const firstNameEle = container.querySelector('#firstName');
    if (firstNameEle) {
      fireEvent.change(firstNameEle, { target: { value: 'John' } });
    }
    expect(firstNameEle).toHaveDisplayValue([/John/]);
    const lastNameEle = container.querySelector('#lastName');
    if (lastNameEle) {
      fireEvent.change(lastNameEle, { target: { value: 'Smith' } });
    }
    expect(lastNameEle).toHaveDisplayValue([/Smith/]);

    // check if the submit button is enabled
    const button = screen.getByText(/Proceed to Checkout/i);
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
  it('able to skip selecting a phone', async () => {
    const { container } = render(
      <Top
        products={productDummy}
        taxes={taxesDummy}
        plans={planDummy}
        planOptions={planOptionDummy}
      />
    );
    const accorditionItemBlock1 = container.querySelector(
      '#accordion-panel-accordionItemBlock1'
    )?.parentElement;
    expect(accorditionItemBlock1?.style.display).toBe('block');
    const nextButton1 = container.querySelector('#nextButton1');
    if (nextButton1) fireEvent.click(nextButton1);
    await waitFor(() =>
      expect(accorditionItemBlock1?.style.display).toBe('none')
    );
  });
  it('show an error when try to go next without selecting a plan', async () => {
    const { container } = render(
      <Top
        products={productDummy}
        taxes={taxesDummy}
        plans={planDummy}
        planOptions={planOptionDummy}
      />
    );
    const accordionButton2 = container.querySelector(
      '#accordion-button-accordionItemBlock2'
    );
    if (accordionButton2) fireEvent.click(accordionButton2);

    const accorditionItemBlock2 = container.querySelector(
      '#accordion-panel-accordionItemBlock2'
    )?.parentElement;
    expect(accorditionItemBlock2?.style.display).toBe('block');
    const nextButton2 = container.querySelector('#nextButton2');
    if (nextButton2) fireEvent.click(nextButton2);
    await waitFor(() => {
      expect(accorditionItemBlock2?.style.display).toBe('block');
    });
  });
  it('able to skip selecting plan options', async () => {
    const { container } = render(
      <Top
        products={productDummy}
        taxes={taxesDummy}
        plans={planDummy}
        planOptions={planOptionDummy}
      />
    );
    const accordionButton3 = container.querySelector(
      '#accordion-button-accordionItemBlock3'
    );
    if (accordionButton3) fireEvent.click(accordionButton3);

    const accorditionItemBlock3 = container.querySelector(
      '#accordion-panel-accordionItemBlock3'
    )?.parentElement;
    expect(accorditionItemBlock3?.style.display).toBe('block');
    const nextButton3 = container.querySelector('#nextButton3');
    if (nextButton3) fireEvent.click(nextButton3);
    await waitFor(() =>
      expect(accorditionItemBlock3?.style.display).toBe('none')
    );
  });
  it('show an error when try to go next without filling in mandatory fields', async () => {
    render(
      <Top
        products={productDummy}
        taxes={taxesDummy}
        plans={planDummy}
        planOptions={planOptionDummy}
      />
    );
    // select a plan
    fireEvent.click(screen.getByText(`${planDummy[0].title}`));
    // hit the submit button
    // const submitButton = container.querySelector('#checkoutButton');
    // if (submitButton) fireEvent.click(submitButton);
  });
});
