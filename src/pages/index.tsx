import type { NextPage } from 'next';

import { MusicTypes } from '../interfaces';

import { Page, Hero, Slider } from '../components';
import { useContext } from 'react';
import { SliderContext } from '../context';
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
        <Hero />
      </ContainerHero>
      <Slider />
    </Page>
  );
};

export default HomePage;
