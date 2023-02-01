import React, { FC, useContext } from 'react';

import Image from 'next/image';

import { SliderContext } from '../../../context';

import { HeroContent } from './HeroStyles';

export const Hero: FC = () => {
  const { musicActive, homeActive, contactActive } = useContext(SliderContext);

  const onItemActive = () => {
    if (musicActive === true) return 'music';
    if (homeActive === true) return 'home';
    if (contactActive === true) return 'contact';

    return 'home';
  };

  return (
    <HeroContent move={onItemActive()}>
      <Image
        src={'/assets/home-hero-desk.png' || '/images/default-bg.svg'}
        alt="Fabricio sentado tocando su guitarra"
        layout="fill"
        objectFit="contain"
        priority
      />
    </HeroContent>
  );
};
