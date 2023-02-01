import styled, { css } from 'styled-components';

interface SocialMediaContainerProps {
  show?: boolean;
}

export const SocialMediaContent = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;

  svg {
    filter: brightness(0) saturate(100%) invert(19%) sepia(14%) saturate(3848%) hue-rotate(358deg)
      brightness(97%) contrast(96%);
    transition: ${({ theme }) => theme.transition.main};

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      width: ${({ theme }) => theme.spacing(7)} !important;
      height: ${({ theme }) => theme.spacing(7)} !important;
    }
  }

  li {
    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      svg:last-child {
        margin-right: 0;
      }
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const SocialMediaContainer = styled.div<SocialMediaContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;

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
