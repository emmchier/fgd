import React, { FC } from 'react';
import { ContactForm } from '../../../form';
import { SendedMessage } from '../../../form/SendedMessage';
import { Loading } from '../../../loading';
import { PageTitle } from '../../../page-title';
import { FormContainer } from '../../SliderStyles';

interface ContactTypes {
  loading?: boolean;
  response?: number;
}

export const Contact: FC<ContactTypes> = ({ loading, response }) => {
  return (
    <>
      <PageTitle>
        <b>CONTACTO</b>
      </PageTitle>
      <FormContainer>
        <span></span>
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
    </>
  );
};
