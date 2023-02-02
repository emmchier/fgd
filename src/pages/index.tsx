import { useContext } from 'react';

import type { NextPage } from 'next';

import { MusicTypes } from '../interfaces';
import { SliderContext } from '../context';

import { Page, SliderHero, Slider } from '../components';

import styled, { css } from 'styled-components';

interface HomePageProps {
  music: MusicTypes[];
}

interface ContainerHeroProps {
  show?: boolean;
}

const ContainerHero = styled.div<ContainerHeroProps>`
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    ${({ show }) =>
      show === false
        ? css`
            display: none;
          `
        : css`
            display: flex;
          `}
  }
`;

const HomePage: NextPage<HomePageProps> = () => {
  const { musicActive, contactActive } = useContext(SliderContext);

  const setActive = () => {
    if (musicActive) return false;
    if (contactActive) return false;

    return true;
  };

  return (
    <Page
      title="Fabricio Gonzalez Diaz | Website"
      description="Descripción"
      keywords="lala, lala, lala"
    >
      <ContainerHero show={setActive()}>
        <SliderHero />
      </ContainerHero>
      <Slider />
    </Page>
  );
};

export default HomePage;
