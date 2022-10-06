import React, { FC, useRef } from 'react';
import useAutosizeTextArea from '../../../hooks/useAutosizeTextArea';

import { TextareaContent, TextareaField, TextareaLabel } from './FormStyles';

interface TextareaI {
  label: string;
  required?: boolean;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}

export const Textarea: FC<TextareaI> = ({ label, name, value, onChange, onBlur, required }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, value as string);

  return (
    <TextareaContent>
      <TextareaLabel htmlFor={name}>{label}</TextareaLabel>
      <TextareaField
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        ref={textAreaRef}
      />
    </TextareaContent>
  );
};
