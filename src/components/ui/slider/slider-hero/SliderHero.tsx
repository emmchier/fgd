import React, { FC, useContext } from 'react';

import Image from 'next/image';

import { SliderContext } from '../../../../context';

import { Hero } from '../../../../components';

import { SliderHeroContent } from './SliderHeroStyles';

export const SliderHero: FC = () => {
  const { musicActive, homeActive, contactActive } = useContext(SliderContext);

  const onItemActive = () => {
    if (musicActive === true) return 'music';
    if (homeActive === true) return 'home';
    if (contactActive === true) return 'contact';

    return 'home';
  };

  return (
    <SliderHeroContent move={onItemActive()}>
      <Hero
        img={'/assets/home-hero-desk.png' || '/images/default-bg.svg'}
        alt="lala"
        width="90%"
        height="90%"
        position="absolute"
        bottom="0"
      />
    </SliderHeroContent>
  );
};
