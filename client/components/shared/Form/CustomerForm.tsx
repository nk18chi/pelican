import { ReactHookFormInput, TInputField } from '@/components/shared/Input';
import { UseFormReturn } from 'react-hook-form';
import {
  SUPPORTED_COUNTRIES,
  generateRandomPhoneNumber,
} from '../../function/utils/fake';

const randomPhoneNumber = generateRandomPhoneNumber({
  country: SUPPORTED_COUNTRIES.CANADA,
});

const inputFields: TInputField[] = [
  {
    name: 'firstName',
    displayName: 'First Name',
    type: 'text',
    validation: { required: true },
    description: "Don't put your actual information",
  },
  {
    name: 'lastName',
    displayName: 'Last Name',
    type: 'text',
    validation: { required: true },
    description: "Don't put your actual information",
  },
  {
    name: 'phone',
    displayName: 'Phone Number',
    type: 'phone',
    validation: { required: true },
    description: "Don't put your actual information",
    disabled: true,
    defaultValue: randomPhoneNumber,
  },
  {
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
    disabled: true,
    defaultValue: `yourphone${randomPhoneNumber}@example.com`,
  },
  {
    name: 'password',
    displayName: 'Password',
    type: 'password',
    validation: { required: true, minLength: 8 },
    defaultValue: 'buildyourplan',
    disabled: true,
    description: '"buildyourplan" is your password',
  },
];

interface CustomerFormProps {
  useFormHooks: UseFormReturn;
}

const CustomerForm = ({ useFormHooks }: CustomerFormProps) => {
  return (
    <>
      {inputFields.map((input) => (
        <ReactHookFormInput
          key={input.name}
          {...{
            input,
            useFormHooks,
          }}
        />
      ))}
    </>
  );
};

export default CustomerForm;
