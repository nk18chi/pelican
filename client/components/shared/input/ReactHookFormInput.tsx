import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Checkbox,
  Textarea,
} from '@chakra-ui/react';
import {
  Controller,
  UseFormReturn,
  FieldErrorsImpl,
  ControllerRenderProps,
} from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { TInputField } from '.';
import Dropzone from './type/Dropzone';

type TErrorMessage = {
  input: TInputField;
  errors: FieldErrorsImpl;
};

const getErrorMessage = ({ errors, input }: TErrorMessage) => {
  const {
    name,
    validation: { minLength },
  } = input || {};
  if (!errors || !Object.keys(errors).length) return '';
  const error = errors[name];
  if (!error || !error.type) return '';
  switch (error.type) {
    case 'required':
      return 'This is a required field.';
    case 'minLength':
      return `This field should be at least ${minLength} characters long.`;
    default:
      return 'Unknown validation error.';
  }
};

type TProps = {
  input: TInputField;
  useFormHooks: UseFormReturn;
};

const ReactHookFormInput = ({ useFormHooks, input }: TProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormHooks;
  if (!register) return null;
  if (!input || !input.type) return null;
  const errorMessage = getErrorMessage({ errors, input });

  return (
    <FormControl
      id={input.name}
      key={input.name}
      isRequired={input.validation.required}
      isInvalid={!!errorMessage}
    >
      {input.displayName && <FormLabel>{input.displayName}</FormLabel>}
      <Controller
        control={control}
        name={input.name}
        rules={input.validation}
        defaultValue={input.defaultValue}
        render={({
          field: { onChange, value },
        }: {
          field: ControllerRenderProps;
        }) => {
          switch (input.type) {
            case 'phone':
              return (
                <PhoneInput
                  disabled={input.disabled}
                  value={value}
                  onChange={onChange}
                  isValid={!errorMessage}
                />
              );
            case 'checkbox':
              return <Checkbox defaultChecked={!!input.defaultChecked} />;
            case 'image':
              return (
                <Dropzone
                  value={value}
                  onChange={onChange}
                  dropzoneConfig={input.dropzoneConfig}
                />
              );
            case 'textarea':
              return (
                <Textarea
                  value={value || ''}
                  onChange={onChange}
                  disabled={input.disabled}
                />
              );
            default:
              return (
                <Input
                  value={value || ''}
                  type={input.type}
                  onChange={onChange}
                  disabled={input.disabled}
                />
              );
          }
        }}
      />
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      {!errorMessage && input.description && (
        <FormHelperText>{input.description}</FormHelperText>
      )}
    </FormControl>
  );
};

export default ReactHookFormInput;
