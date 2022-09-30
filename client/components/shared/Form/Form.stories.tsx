import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PlanAccordionForm from './PlanAccordionForm';
import { TSelectedPlan } from '@/components/page/Top/Top';

export default {
  title: 'Components/shared/Form',
  component: PlanAccordionForm,
  argTypes: {},
} as ComponentMeta<typeof PlanAccordionForm>;

const Template: ComponentStory<typeof PlanAccordionForm> = (args) => {
  const [selectedPlan, setSelectedPlan] = useState<TSelectedPlan>({
    options: [],
  });
  return (
    <PlanAccordionForm
      {...args}
      selectedPlan={selectedPlan}
      setSelectedPlan={setSelectedPlan}
    />
  );
};

export const planAccordionForm = Template.bind({});
planAccordionForm.args = {
  products: [
    {
      _id: '6134262fb7601fc4de2356e0',
      isNewItem: true,
      imageURL: '/assets/img/phones/phone-1.png',
      name: 'iPhone 13',
      price: 1800,
      rating: 4.8,
      numReviews: 134,
      __typename: 'Products',
    },
    {
      _id: '6134262fb7601fc4de2356e1',
      isNewItem: true,
      imageURL: 'assets/img/phones/phone-2.png',
      name: 'Goolge Pixel 6a',
      price: 1000,
      rating: 4.7,
      numReviews: 42,
      __typename: 'Products',
    },
    {
      _id: '6134262fb7601fc4de2356e2',
      isNewItem: true,
      imageURL: '/assets/img/phones/phone-3.png',
      name: 'Samsung Galaxy',
      price: 1200,
      rating: 4.2,
      numReviews: 34,
      __typename: 'Products',
    },
  ],
  plans: [
    {
      _id: '6134262fb7601fc4de2356c0',
      title: 'Standard',
      options: [
        { desc: 'up to 10 GB / mo', __typename: 'PlansOptions' },
        { desc: '30 min free call / mo', __typename: 'PlansOptions' },
        { desc: 'Unlimited Canada Calling', __typename: 'PlansOptions' },
      ],
      price: 30.0,
      __typename: 'Plans',
    },
    {
      _id: '6134262fb7601fc4de2356c1',
      title: 'Gold',
      options: [
        { desc: 'up to 50 GB / mo', __typename: 'PlansOptions' },
        { desc: '120 min free call / mo', __typename: 'PlansOptions' },
        { desc: 'Unlimited Canada/US Calling', __typename: 'PlansOptions' },
      ],
      price: 70.0,
      __typename: 'Plans',
    },
    {
      _id: '6134262fb7601fc4de2356c2',
      title: 'Platinum',
      options: [
        { desc: 'unlimited data', __typename: 'PlansOptions' },
        { desc: 'free call', __typename: 'PlansOptions' },
        { desc: 'Unlimited International Calling', __typename: 'PlansOptions' },
      ],
      price: 200.0,
      __typename: 'Plans',
    },
  ],
  planOptions: [
    {
      _id: '6134262fb7601fc4de2356b0',
      label: 'Device Protection',
      price: 6.99,
      __typename: 'PlanOptions',
    },
    {
      _id: '6134262fb7601fc4de2356b1',
      label: 'Premium Voicemail-To-Text',
      price: 15,
      __typename: 'PlanOptions',
    },
  ],
};
