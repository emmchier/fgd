import React, { FC, useContext } from 'react';

import { SliderContext } from '../../../context';
import { PageTitle } from '../../ui';
import { ContactForm } from '../form/Form';
import { SendedMessage } from '../form/SendedMessage';
import { Loading } from '../loading';
import { Songs } from '../songs/Songs';
import { SliderItem } from './';

import { Content, FormContainer } from './SliderStyles';

interface SliderTypes {
  songList?: any[];
}

export const Slider: FC<SliderTypes> = ({ songList = [] }) => {
  const { homeActive, contactActive, musicActive, loading, response } = useContext(SliderContext);

  return (
    <Content>
      <SliderItem active={musicActive}>
        <PageTitle>
          <b>CANCIONES</b>
        </PageTitle>
        <Songs items={songList} />
      </SliderItem>
      <SliderItem active={homeActive}>
        <PageTitle variant="h1">
          <b>FABRICIO</b>
          <span>GONZALEZ</span>
          <span>DIAZ</span>
        </PageTitle>
      </SliderItem>
      <SliderItem active={contactActive}>
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
      </SliderItem>
    </Content>
  );
};
