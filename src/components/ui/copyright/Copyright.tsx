import React, { useContext } from 'react';

import { useRouter } from 'next/router';

import { SliderContext } from '../../../context';

import { Text, Line } from '../../../components';

import { CopyrightList } from './CopyrightStyles';

export const Copyright = () => {
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
    <>
      <CopyrightList>
        <li>
          <a onClick={onClickPolicy}>Políticas</a>
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
      </CopyrightList>
    </>
  );
};
