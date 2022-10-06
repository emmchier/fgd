import React, { FC } from 'react';
import { InputContent, InputField, Label } from './FormStyles';

interface InputI {
  label: string;
  required?: boolean;
  type?: 'text' | 'number' | 'email' | 'password' | 'checkbox' | 'radio';
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const Input: FC<InputI> = ({
  label,
  required,
  type,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  disabled,
}) => {
  return (
    <InputContent>
      <Label htmlFor={name}>{label}</Label>
      <InputField
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </InputContent>
  );
};
