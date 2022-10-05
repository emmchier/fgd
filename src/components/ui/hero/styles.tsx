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

export const Content = styled.div<PropTypes>`
  img {
    ${({ move }) => translateStyles(move as string)};
    transform: translateX(0);
    transition: all 0.5s ease-in-out;
  }
`;
