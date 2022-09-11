import { ComponentStory, ComponentMeta } from '@storybook/react';

import Product from './Product';

export default {
  title: 'Components/card/Product',
  component: Product,
  argTypes: {},
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => (
  <Product {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isNewItem: true,
  imageURL: '/assets/img/phones/phone-1.png',
  name: 'iPhone 13',
  price: 1800,
  rating: 4.8,
  numReviews: 134,
  selected: true,
};
