import React, { useContext } from 'react';
import { FCC } from '../../../types';

import { SliderContext } from '../../../context';

import { AsideContent, BarLeft, BarRight } from './AsideInfoStyles';

import {
  Line,
  SocialMedia,
  SocialMediaContainer,
  Container,
  Copyright,
  Powered,
} from '../../../components';

export const AsideInfo: FCC = ({ children }) => {
  const { musicActive, contactActive, singingActive } = useContext(SliderContext);

  const setActive = () => {
    if (musicActive) return false;
    if (contactActive) return false;
    if (singingActive) return false;

    return true;
  };

  return (
    <Container>
      <AsideContent>
        <BarLeft>
          <span>
            <Powered />
          </span>
        </BarLeft>
        {children}
        <BarRight isMusic={musicActive}>
          <SocialMediaContainer show={setActive()}>
            <Line width="2px" height="50px" />
            <SocialMedia />
          </SocialMediaContainer>
          <span>
            <Copyright />
          </span>
        </BarRight>
      </AsideContent>
    </Container>
  );
};
