import React, { FC, useContext } from 'react';
import { SliderContext } from '../../../context';
import { SliderItem } from './';

import { Content } from './SliderStyles';

export const Slider: FC = () => {
  const { homeActive, contactActive, musicActive } = useContext(SliderContext);

  return (
    <Content>
      <SliderItem active={musicActive}>
        <div>MUSIC</div>
      </SliderItem>
      <SliderItem active={homeActive}>
        <div>HOME</div>
      </SliderItem>
      <SliderItem active={contactActive}>
        <div>CONTACT</div>
      </SliderItem>
    </Content>
  );
};
