import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DetailInvoice } from '.';

export default {
  title: 'Components/shared/DetailInvoice',
  component: DetailInvoice,
  argTypes: {},
} as ComponentMeta<typeof DetailInvoice>;

const Template: ComponentStory<typeof DetailInvoice> = (args) => (
  <DetailInvoice {...args} />
);

export const Default = Template.bind({});
Default.args = {
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
