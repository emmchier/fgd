import Link from 'next/link';
import React, { FC, useContext } from 'react';
import { SliderContext } from '../../../context';
import { Line } from '../line';
import { Content, Nav } from './styles';

export const Navbar: FC = () => {
  const { onMusicActive, onHomeActive, onContactActive } = useContext(SliderContext);

  return (
    <Content>
      <span>
        <Nav>
          <ul>
            <li>
              <Line />
            </li>
            <li onClick={onMusicActive}>
              <a>CANCIONES</a>
            </li>
            <li onClick={onHomeActive}>
              <a>INICIO</a>
            </li>
            <li onClick={onContactActive}>
              <a>CONTACTO</a>
            </li>
            <li>
              <Link href="/biografia" passHref>
                <a>BIO</a>
              </Link>{' '}
              - {new Date().getFullYear()} © Fabricio Gonzalez Diaz
            </li>
          </ul>
        </Nav>
      </span>
    </Content>
  );
};
