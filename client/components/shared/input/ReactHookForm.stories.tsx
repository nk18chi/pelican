import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import ReactHookFormInput from './ReactHookFormInput';

export default {
  title: 'Components/shared/Input/ReactHookForm',
  component: ReactHookFormInput,
  argTypes: {},
} as ComponentMeta<typeof ReactHookFormInput>;

const Template: ComponentStory<typeof ReactHookFormInput> = (args) => {
  const useFormHooks = useForm({ defaultValues: {} });
  return <ReactHookFormInput {...args} useFormHooks={useFormHooks} />;
};

export const Text = Template.bind({});
Text.args = {
  input: {
    name: 'text',
    displayName: 'Text',
    type: 'text',
    validation: { required: false },
    description: 'Description',
  },
};
export const Phone = Template.bind({});
Phone.args = {
  input: {
    name: 'phoneNumber',
    displayName: 'Phone Number',
    type: 'phone',
    validation: { required: true },
    description: "Don't put your actual information",
    disabled: true,
    defaultValue: '+1778-123-456',
  },
};

export const Email = Template.bind({});
Email.args = {
  input: {
    name: 'email',
    displayName: 'Email',
    type: 'email',
    validation: {
      required: true,
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Your email is not valid.',
      },
    },
    description: "Don't put your actual information",
    disabled: false,
    defaultValue: `storybook@example.com`,
  },
};

export const Password = Template.bind({});
Password.args = {
  input: {
    name: 'password',
    displayName: 'Password',
    type: 'password',
    validation: { required: true, minLength: 8 },
    defaultValue: 'buildyourplan',
    disabled: false,
    description: '"buildyourplan" is your password',
  },
};
