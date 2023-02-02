import React, { FC } from 'react';

import Image from 'next/image';

import { HeroContent } from './HeroStyles';

interface Props {
  alt?: string;
  img?: string;
  width?: any;
  height?: any;
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const Hero: FC<Props> = ({
  img = '',
  alt = '',
  width = '100%',
  height = '100%',
  position = 'relative',
  top = '',
  bottom = '',
  left = '',
  right = '',
}) => (
  <HeroContent
    width={width}
    height={height}
    position={position}
    top={top}
    bottom={bottom}
    left={left}
    right={right}
  >
    <Image src={img} alt={alt} layout="fill" objectFit="contain" priority />
  </HeroContent>
);
