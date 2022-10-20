import React, { FC, useContext } from 'react';

import { Form, Formik } from 'formik';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';

import { FormikField } from './FormikField';
import { ButtonContainer, FormContent } from './FormStyles';
import { Button } from '../button';
import { SliderContext } from '../../../context';

export const ContactForm: FC = () => {
  const { loading, showLoading, hideLoading, showMessage } = useContext(SliderContext);

  const initialState = {
    userName: '',
    userEmail: '',
    userMessage: '',
  };

  const validateFillInputs = (userName: string, userEmail: string, userMessage: string) =>
    loading !== true
      ? userName !== '' && userEmail !== '' && userMessage !== ''
        ? false
        : true
      : true;

  const validateSomeFillInputs = (userName: string, userEmail: string, userMessage: string) =>
    loading !== true
      ? userName !== '' || userEmail !== '' || userMessage !== ''
        ? false
        : true
      : true;

  return (
    <Formik
      initialValues={initialState}
      onSubmit={(values, { resetForm }) => {
        try {
          showLoading();
          setTimeout(() => {
            resetForm();
            hideLoading();
            showMessage();
          }, 3000);

          // emailjs
          //   .send(
          //     process.env.EMAILJS_SERVICE_ID as string,
          //     process.env.EMAILJS_TEMPLATE_ID as string,
          //     values,
          //     process.env.EMAILJS_PUBLIC_KEY as string
          //   )
          //   .then((res) => {
          //     console.log(res);
          //     if (res.status === 200) {
          //       setResponse();
          //       resetForm();
          //     }
          //   });
        } catch {
          hideLoading();
          // setShowSnackbar(true);
        }
      }}
      validationSchema={Yup.object({
        userName: Yup.string().required('Name is required'),
        userEmail: Yup.string().email('Email is not valid').required('Email is required'),
        userMessage: Yup.string().required('Message is required'),
      })}
    >
      {(formik) => (
        <FormContent>
          <Form>
            <FormikField label="Your name / company name" name="userName" />
            <FormikField label="Your E-mail" name="userEmail" />
            <FormikField textarea label="Tell us about your Idea or Project" name="userMessage" />
            <ButtonContainer>
              <Button
                type="submit"
                variant="outlined"
                ariaLabel="send message"
                disabled={validateFillInputs(
                  formik.values.userName,
                  formik.values.userEmail,
                  formik.values.userMessage
                )}
              >
                Send
              </Button>
              <Button
                onClick={formik.resetForm}
                ariaLabel="reset form"
                disabled={validateSomeFillInputs(
                  formik.values.userName,
                  formik.values.userEmail,
                  formik.values.userMessage
                )}
              >
                Clear
              </Button>
            </ButtonContainer>
          </Form>
        </FormContent>
      )}
    </Formik>
  );
};
