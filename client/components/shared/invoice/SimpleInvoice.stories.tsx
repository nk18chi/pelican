import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SimpleInvoice } from '.';

export default {
  title: 'Components/shared/SimpleInvoice',
  component: SimpleInvoice,
  argTypes: {},
} as ComponentMeta<typeof SimpleInvoice>;

const Template: ComponentStory<typeof SimpleInvoice> = (args) => (
  <SimpleInvoice {...args} />
);

export const Default = Template.bind({});
Default.args = {
  invoices: [
    {
      id: '1',
      label: 'Monthly Fees',
      total: { label: 'Total', value: 41.4288 },
      details: [
        { id: '1', label: 'Standard Plan', value: 30 },
        {
          id: '6134262fb7601fc4de2356b0',
          label: 'Device Protection',
          value: 6.99,
        },
        { id: '10', label: 'Subtotal', value: 36.99 },
        {
          id: '6134262fb7601fc4de2356a0',
          label: 'GST/HST',
          value: 1.8495000000000001,
        },
        {
          id: '6134262fb7601fc4de2356a1',
          label: 'PST/QST',
          value: 2.5893000000000006,
        },
      ],
    },
    {
      id: '2',
      label: 'One-Time Fees',
      total: { label: 'Total', value: 1176 },
      details: [
        { id: '1', label: 'Goolge Pixel 6a', value: 1000 },
        { id: '2', label: 'Set Up Service Fee', value: 50 },
        { id: '10', label: 'Subtotal', value: 1050 },
        { id: '6134262fb7601fc4de2356a0', label: 'GST/HST', value: 52.5 },
        { id: '6134262fb7601fc4de2356a1', label: 'PST/QST', value: 73.5 },
      ],
    },
  ],
};
