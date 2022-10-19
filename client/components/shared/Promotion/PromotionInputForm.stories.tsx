import { ComponentStory, ComponentMeta } from '@storybook/react';

import PromotionInputForm from './PromotionInputForm';

export default {
  title: 'Components/shared/PromotionInputForm',
  component: PromotionInputForm,
  argTypes: {},
} as ComponentMeta<typeof PromotionInputForm>;

const Template: ComponentStory<typeof PromotionInputForm> = (args) => (
  <PromotionInputForm {...args} />
);

export const Default = Template.bind({});
