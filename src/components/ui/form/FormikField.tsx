import React, { FC } from 'react';

import { useField } from 'formik';

import { Input, Textarea } from '../../../components';

import { ContentField, Error, TextareaContainer } from './FormStyles';

interface PropTypes {
  label: string;
  textarea?: boolean;
  name: string;
  type?: 'text' | 'email' | 'password';
  [x: string]: any;
}

export const FormikField: FC<PropTypes> = ({ label = '', textarea = false, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <ContentField>
      {!textarea ? (
        <>
          <Input {...field} {...props} label={label} />
          {meta.touched && meta.error && <Error>{meta.error}</Error>}
        </>
      ) : (
        <TextareaContainer>
          <Textarea {...field} {...props} label={label} />
          {meta.touched && meta.error && <Error>{meta.error}</Error>}
        </TextareaContainer>
      )}
    </ContentField>
  );
};
