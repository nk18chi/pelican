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
