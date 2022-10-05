import React, { FC, useContext } from 'react';
import { SliderContext } from '../../../context';
import { Content } from './styles';

export const Navbar: FC = () => {
  const { onMusicActive, onHomeActive, onContactActive } = useContext(SliderContext);

  return (
    <Content>
      <nav>
        <button onClick={onMusicActive}>CANCIONES</button>
        <button onClick={onHomeActive}>INICIO</button>
        <button onClick={onContactActive}>CONTACTO</button>
      </nav>
    </Content>
  );
};
