import React from 'react';
import { FCC } from '../../../types';

import Link from 'next/link';

import { DisandevBrand } from '../icons';
import { Line } from '../line';
import { SocialMedia, SocialMediaContainer } from '../social-media';

import { AsideContent, BarLeft, BarRight } from './AsideInfoStyles';

export const AsideInfo: FCC = ({ children }) => {
  return (
    <AsideContent>
      <BarLeft>
        <div></div>
        <span>
          <div>
            <p>Powered by</p>
            <a href="https://disandev.com" target="_blank">
              <DisandevBrand />
            </a>
            <Line />
          </div>
        </span>
        <Line width="100%" moveTo="Y(-50px)" />
      </BarLeft>
      {children}
      <BarRight>
        <SocialMediaContainer>
          <Line width="2px" height="50px" />
          <SocialMedia />
        </SocialMediaContainer>
        <span>
          <div>
            <Link href="/politicas-de-calidad">Políticas de Calidad</Link>
            <Link href="/cookies">Cookies</Link>
            <p>{new Date().getFullYear()} © Fabricio Gonzalez Diaz</p>
            <Line width="150px" height="2px" />
          </div>
        </span>
      </BarRight>
    </AsideContent>
  );
};
