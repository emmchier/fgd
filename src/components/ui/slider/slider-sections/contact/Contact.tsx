import React, { FC } from 'react';

import {
  ContactForm,
  SendedMessage,
  Animation,
  Loading,
  PageTitle,
} from '../../../../../components';

import { FormContainer } from '../../SliderStyles';

interface ContactTypes {
  loading?: boolean;
  response?: number;
  onLoad?: boolean;
}

export const Contact: FC<ContactTypes> = ({ loading, response, onLoad }) => {
  return (
    <>
      {onLoad === true && (
        <>
          <Animation lapse={onLoad === true ? '2.5' : '0'}>
            <PageTitle>Contacto</PageTitle>
            <FormContainer>
              {loading === true ? (
                <>
                  <Loading loading={loading} />
                </>
              ) : response === 0 ? (
                <ContactForm />
              ) : (
                <SendedMessage />
              )}
            </FormContainer>
          </Animation>
        </>
      )}
    </>
  );
};
