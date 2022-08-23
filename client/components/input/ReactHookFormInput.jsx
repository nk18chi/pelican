import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const getErrorMessage = (errors, input) => {
  const {
    name,
    validation: { minLength },
  } = input || {};
  if (!errors || !Object.keys(errors).length) return null;
  const error = errors[name];
  if (!error || !error.type) return '';
  console.log('error', error, input);
  switch (error.type) {
    case 'required':
      return 'This is a required field.';
    case 'minLength':
      return `This field should be at least ${minLength} characters long.`;
    default:
      return error.message || 'Unknown validation error.';
  }
};

const ReactHookFormInput = (props) => {
  const { useFormHooks, input } = props;
  const {
    register,
    control,
    formState: { errors },
  } = useFormHooks;
  if (!register) return null;
  if (!input || !input.type) return null;
  const errorMessage = getErrorMessage(errors, input);

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
        render={({ field: { onChange, value } }) => {
          switch (input.type) {
            case 'phone':
              return (
                <PhoneInput
                  country={input.country}
                  disabled={input.disabled}
                  value={value}
                  onChange={onChange}
                  defaultValue={input.value}
                  isValid={!errorMessage}
                />
              );
            default:
              return (
                <Input
                  value={value}
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
