import React, { useContext } from 'react';
import { FCC } from '../../../types';

import Link from 'next/link';

import { DisandevBrand } from '../icons';
import { Line } from '../line';
import { SocialMedia, SocialMediaContainer } from '../social-media';

import { AsideContent, BarLeft, BarRight } from './AsideInfoStyles';
import { Container } from '../container';
import { Text } from '../text/Text';
import { SliderContext } from '../../../context';
import { useRouter } from 'next/router';

export const AsideInfo: FCC = ({ children }) => {
  const { onCookiesActive, onPolicyActive } = useContext(SliderContext);
  const { push } = useRouter();

  const onClickCookies = () => {
    onCookiesActive();
    push('/cookies');
  };

  const onClickPolicy = () => {
    onPolicyActive();
    push('/politicas-de-calidad');
  };

  return (
    <Container>
      <AsideContent>
        <BarLeft>
          <span>
            <div>
              <Text size="body4">Powered by</Text>
              <a href="https://disandev.com" target="_blank">
                <DisandevBrand />
              </a>
            </div>
          </span>
        </BarLeft>
        {children}
        <BarRight>
          <SocialMediaContainer>
            <Line width="2px" height="50px" />
            <SocialMedia />
          </SocialMediaContainer>
          <span>
            <ul>
              <li>
                <a onClick={onClickPolicy}>Políticas de Calidad</a>
              </li>
              <li>
                <a onClick={onClickCookies}>Cookies</a>
              </li>
              <li>
                <Text size="body4">{new Date().getFullYear()} © FGD</Text>
              </li>
              <li>
                <Line width="2px" height="50px" />
              </li>
            </ul>
          </span>
        </BarRight>
      </AsideContent>
    </Container>
  );
};
