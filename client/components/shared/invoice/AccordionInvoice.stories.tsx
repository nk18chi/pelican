import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccordionInvoice } from '.';

export default {
  title: 'Components/shared/AccordionInvoice',
  component: AccordionInvoice,
  argTypes: {},
} as ComponentMeta<typeof AccordionInvoice>;

const Template: ComponentStory<typeof AccordionInvoice> = (args) => (
  <AccordionInvoice {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Invoice',
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
