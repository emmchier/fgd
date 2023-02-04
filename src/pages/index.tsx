import { useContext } from 'react';

import type { NextPage } from 'next';

import { MusicType } from '../interfaces';
import { SliderContext } from '../context';

import { Page, SliderHero, Slider, Hero } from '../components';

import styled, { css } from 'styled-components';

interface HomePageProps {
  music: MusicType[];
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

const list: MusicType[] = [
  {
    img: '/assets/single-los-angeles-sabran.png',
    alt: 'lalalala',
    title: 'Los angeles sabrán',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
      {
        type: 'youtube',
        link: 'https://youtube.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
  {
    img: '/assets/single-mil-sitios-un-lugar.png',
    alt: 'lalalala',
    title: 'Mil sitios, un hogar',
    year: '2022',
    type: 'single',
    actions: [
      {
        type: 'spotify',
        link: 'https://spotify.com',
      },
    ],
  },
];

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
      <Slider songList={list} />
    </Page>
  );
};

export default HomePage;
