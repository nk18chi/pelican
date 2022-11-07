import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlanAccordionForm from './PlanAccordionForm';

export default {
  title: 'Components/shared/Form',
  component: PlanAccordionForm,
  argTypes: {},
} as ComponentMeta<typeof PlanAccordionForm>;

const Template: ComponentStory<typeof PlanAccordionForm> = (args) => {
  return <PlanAccordionForm {...args} />;
};

export const planAccordionForm = Template.bind({});
planAccordionForm.args = {};
