import React, { FC } from 'react';
import { useField } from 'formik';

import { ContentField, Error, TextareaContainer } from './FormStyles';
import { Input, Textarea } from './';

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
