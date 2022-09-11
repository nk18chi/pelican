export { default as ReactHookFormInput } from './ReactHookFormInput';
export type TInputField = {
  name: string;
  displayName: string;
  type: 'text' | 'email' | 'password' | 'phone';
  validation: {
    required: boolean;
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: number;
  };
  description?: string;
  disabled?: boolean;
  defaultValue?: string;
};
