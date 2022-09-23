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
  selectedPlan: {
    plan: {
      price: 30,
      title: 'Standard',
      __typename: 'Plans',
      _id: '6134262fb7601fc4de2356c0',
      options: [
        { __typename: 'PlansOptions', desc: 'up to 10 GB / mo' },
        { __typename: 'PlansOptions', desc: '30 min free call / mo' },
        { __typename: 'PlansOptions', desc: 'Unlimited Canada Calling' },
      ],
    },
    phone: {
      imageURL: '/assets/img/phones/phone-1.png',
      isNewItem: true,
      name: 'iPhone 13',
      numReviews: 134,
      price: 1800,
      rating: 4.8,
      __typename: 'Products',
      _id: '6134262fb7601fc4de2356e0',
    },
    options: [
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
    ],
  },
  taxes: [
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
  ],
};
