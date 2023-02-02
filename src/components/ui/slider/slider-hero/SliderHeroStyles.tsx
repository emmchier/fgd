import styled, { css } from 'styled-components';

interface PropTypes {
  move: 'music' | 'home' | 'contact';
}

const translateStyles = (move: string) =>
  ({
    music: css`
      transform: translateX(20%) !important;
    `,
    home: css`
      transform: translateX(0);
    `,
    contact: css`
      transform: translateX(-20%) !important;
    `,
  }[move]);

export const SliderHeroContent = styled.div<PropTypes>`
  img {
    ${({ move }) => translateStyles(move)};
    transform: translateX(0);
    transition: all 0.35s ease-in-out;
  }
`;

export const SliderDesk = styled.div`
  display: flex;
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const SliderMob = styled.div`
  display: none;
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    overflow: hidden;
    span {
      transform: translateY(8%) !important;
    }
  }
`;
