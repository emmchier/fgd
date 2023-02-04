import React, { FC, useContext } from 'react';

import { SliderContext } from '../../../context';

import { SliderItem, Contact, Home, Music, Hero } from '../../../components';

import { SliderContent } from './SliderStyles';
import { MusicType } from '../../../interfaces';

interface SliderTypes {
  songList?: MusicType[];
}

export const Slider: FC<SliderTypes> = ({ songList = [] }) => {
  const { homeActive, contactActive, musicActive, loading, response } = useContext(SliderContext);

  return (
    <SliderContent>
      <SliderItem active={musicActive}>
        <Music songList={songList} onLoad={musicActive} />
      </SliderItem>
      <SliderItem active={homeActive}>
        <Home onLoad={homeActive} />
      </SliderItem>
      <SliderItem active={contactActive}>
        <Contact loading={loading} response={response} onLoad={contactActive} />
      </SliderItem>
    </SliderContent>
  );
};
