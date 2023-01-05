import { FormStatus } from '@/components/types/plan';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlanAccordionForm from './PlanAccordionForm';

export default {
  title: 'Components/shared/Form',
  component: PlanAccordionForm,
  argTypes: {},
} as ComponentMeta<typeof PlanAccordionForm>;

const Template: ComponentStory<typeof PlanAccordionForm> = () => {
  return (
    <PlanAccordionForm
      handleSubmitButton={() => console.log('submit')}
      accordionBlocks={[
        {
          title: 'First',
          component: <p>First Component</p>,
          status: FormStatus.valid,
        },
        {
          title: 'Second',
          component: <p>Second Component</p>,
          status: FormStatus.valid,
        },
        {
          title: 'Third',
          component: <p>Third Component</p>,
          status: FormStatus.valid,
        },
      ]}
    />
  );
};

export const planAccordionForm = Template.bind({});
planAccordionForm.args = {};
