import React, { FC, useContext } from 'react';

import { useRouter } from 'next/router';
import { SliderContext } from '../../../context';
import { NavbarItem } from './NavbarItem';
import { Content, Nav } from './NavbarStyles';

export const Navbar: FC = () => {
  const {
    musicActive,
    homeActive,
    contactActive,
    bioActive,
    onMusicActive,
    onHomeActive,
    onContactActive,
    onBioActive,
  } = useContext(SliderContext);

  const router = useRouter();

  const onClickBio = () => {
    onBioActive();
    router.push('/biografia');
  };

  const onClickItem = (onClick: () => void) => {
    if (bioActive === true) {
      onClick();
      router.push('/');
    } else {
      onClick();
    }
  };

  return (
    <Content>
      <Nav>
        <ul>
          <NavbarItem
            label="CANCIONES"
            onClick={() => onClickItem(onMusicActive)}
            isActive={musicActive}
          />
          <NavbarItem
            label="INICIO"
            onClick={() => onClickItem(onHomeActive)}
            isActive={homeActive}
          />
          <NavbarItem
            label="CONTACTO"
            onClick={() => onClickItem(onContactActive)}
            isActive={contactActive}
          />
          <NavbarItem label="BIO" onClick={onClickBio} isActive={bioActive} />
        </ul>
      </Nav>
    </Content>
  );
};
