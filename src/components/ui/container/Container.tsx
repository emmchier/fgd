import React, { useContext } from 'react';

import { FCC } from '../../../types';

import { ContainerContent } from './ContainerStyles';
import { SliderContext } from '../../../context/SliderContext';

interface ContainerTypes {
  size?: 'sm' | 'md' | 'lg' | 'none';
}

export const Container: FCC<ContainerTypes> = ({ children, size = 'lg' }) => {
  const { homeActive, musicActive } = useContext(SliderContext);

  return (
    <ContainerContent
      isHome={homeActive === true && true}
      isMusic={musicActive === true && true}
      size={size}
    >
      {children}
    </ContainerContent>
  );
};
