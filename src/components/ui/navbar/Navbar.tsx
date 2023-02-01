import React, { FC, useContext } from 'react';

import { useRouter } from 'next/router';
import { SliderContext } from '../../../context';
import { NavbarItem } from './NavbarItem';
import { Content, Nav } from './NavbarStyles';
import { Container } from '../container';

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
    <Content>
      <Container>
        <Nav>
          <ul>
            <NavbarItem
              label="Canciones"
              onClick={() => onClickItem(onMusicActive)}
              isActive={musicActive}
            />
            <NavbarItem
              label="Inicio"
              onClick={() => onClickItem(onHomeActive)}
              isActive={homeActive}
            />
            <NavbarItem
              label="Contacto"
              onClick={() => onClickItem(onContactActive)}
              isActive={contactActive}
            />
            <NavbarItem label="Bio" onClick={onClickBio} isActive={bioActive} />
          </ul>
        </Nav>
      </Container>
    </Content>
  );
};
