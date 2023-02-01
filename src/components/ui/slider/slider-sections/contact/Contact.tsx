import React, { FC } from 'react';
import { Animation } from '../../../animation';
import { ContactForm } from '../../../form';
import { SendedMessage } from '../../../form/SendedMessage';
import { Loading } from '../../../loading';
import { PageTitle } from '../../../section-title';
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
            <PageTitle>CONTACTO</PageTitle>
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
          </Animation>
        </>
      )}
    </>
  );
};
