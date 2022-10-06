import Link from 'next/link';
import React from 'react';
import { FCC } from '../../../types';
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
            <Link href="/politicas-de-calidad">Políticas</Link>
            <Link href="/cookies">Cookies</Link>
            <p>{new Date().getFullYear()} © F. G. D.</p>
            <Line width="150px" height="2px" />
          </div>
        </span>
      </BarRight>
    </AsideContent>
  );
};
