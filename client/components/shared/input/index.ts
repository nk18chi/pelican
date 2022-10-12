import { TDropzoneConfig } from './type/Dropzone';

export { default as ReactHookFormInput } from './ReactHookFormInput';
export type TInputField = {
  name: string;
  displayName: string;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'phone'
    | 'number'
    | 'checkbox'
    | 'date'
    | 'image'
    | 'textarea';
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
  defaultChecked?: boolean;
  dropzoneConfig?: TDropzoneConfig;
};
