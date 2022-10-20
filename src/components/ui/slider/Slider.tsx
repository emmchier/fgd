import React, { FC, useContext } from 'react';

import { SliderContext } from '../../../context';
import { SliderItem } from './';
import { Contact, Home, Music } from './slider-sections';

import { Content } from './SliderStyles';

interface SliderTypes {
  songList?: any[];
}

export const Slider: FC<SliderTypes> = ({ songList = [] }) => {
  const { homeActive, contactActive, musicActive, loading, response } = useContext(SliderContext);

  return (
    <Content>
      <SliderItem active={musicActive}>
        <Music songList={songList} />
      </SliderItem>
      <SliderItem active={homeActive}>
        <Home />
      </SliderItem>
      <SliderItem active={contactActive}>
        <Contact loading={loading} response={response} />
      </SliderItem>
    </Content>
  );
};
