import React, { FC, useContext } from 'react';

import Image from 'next/image';
import { Content } from './styles';
import { SliderContext } from '../../../context';

interface HeroProps {
  //   prop: type;
}

export const Hero: FC<HeroProps> = () => {
  const { musicActive, homeActive, contactActive } = useContext(SliderContext);

  const onItemActive = () => {
    if (musicActive === true) return 'music';
    if (homeActive === true) return 'home';
    if (contactActive === true) return 'contact';

    return 'home';
  };

  return (
    <Content move={onItemActive()}>
      <Image
        src={'/assets/home-hero-desk.png' || '/images/default-bg.svg'}
        alt="Fabricio sentado tocando su guitarra"
        layout="fill"
        objectFit="contain"
        priority
      />
    </Content>
  );
};
