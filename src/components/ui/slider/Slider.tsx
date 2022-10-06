import React, { FC, useContext } from 'react';

import { SliderContext } from '../../../context';
import { PageTitle } from '../../ui';
import { ContactForm } from '../form/Form';
import { Songs } from '../songs/Songs';
import { SliderItem } from './';

import { Content } from './SliderStyles';

interface SliderTypes {
  songList?: any[];
}

export const Slider: FC<SliderTypes> = ({ songList = [] }) => {
  const { homeActive, contactActive, musicActive } = useContext(SliderContext);

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
        {/* <ContactForm
          setShowLoading={setLoading}
          setResponse={setResponse}
          setShowSnackbar={setShowSnackbar}
        /> */}
      </SliderItem>
    </Content>
  );
};
