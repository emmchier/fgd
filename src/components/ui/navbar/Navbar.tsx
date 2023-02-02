import React, { FC, useContext } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';

import { SliderContext } from '../../../context';

import {
  NavbarItem,
  Container,
  ContactIcon,
  HomeIcon,
  MusicIcon,
  BioIcon,
  Powered,
  Copyright,
  Hero,
} from '../../../components';

import { NavbarContent, Nav, FooterInfo } from './NavbarStyles';

export const Navbar: FC = () => {
  const {
    musicActive,
    homeActive,
    contactActive,
    bioActive,
    cookiesActive,
    policyActive,
    singingActive,
    onMusicActive,
    onHomeActive,
    onContactActive,
    onBioActive,
  } = useContext(SliderContext);

  const { push } = useRouter();

  const onClickBio = () => {
    onBioActive();
    push('/biografia');
  };

  const onClickItem = (onClick: () => void) => {
    if (
      bioActive === true ||
      cookiesActive === true ||
      policyActive === true ||
      singingActive === true
    ) {
      onClick();
      push('/');
    } else {
      onClick();
    }
  };

  return (
    <NavbarContent>
      <Nav>
        <ul>
          <NavbarItem
            label="Música"
            icon={<MusicIcon />}
            onClick={() => onClickItem(onMusicActive)}
            isActive={musicActive}
          />
          <NavbarItem
            label="Inicio"
            icon={<HomeIcon />}
            onClick={() => onClickItem(onHomeActive)}
            isActive={homeActive}
          />
          <NavbarItem
            label="Contacto"
            icon={<ContactIcon />}
            onClick={() => onClickItem(onContactActive)}
            isActive={contactActive}
          />
          <NavbarItem label="Bio" icon={<BioIcon />} onClick={onClickBio} isActive={bioActive} />
        </ul>
      </Nav>
      <FooterInfo>
        <Copyright />
        <Powered />
      </FooterInfo>
    </NavbarContent>
  );
};
