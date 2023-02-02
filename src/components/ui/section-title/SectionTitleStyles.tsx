import styled, { css } from 'styled-components';

interface PageTitleContentProps {
  isHome?: boolean;
}

export const PageTitleContent = styled.div<PageTitleContentProps>`
  display: flex;
  position: relative;
  border-left: 2px solid ${({ theme }) => theme.color.secondary.dark};
  ${({ isHome }) =>
    isHome === true &&
    css`
      margin-left: ${({ theme }) => theme.spacing(4)};
    `};

  h1,
  h2 {
    font-size: ${({ theme }) => theme.font.title[1].size};
    line-height: ${({ theme }) => theme.font.title[2].lineHeight};
    margin-top: ${({ theme }) => theme.spacing(8)} !important;
    margin-left: ${({ theme }) => theme.spacing(2)} !important;
    transform: translateY(5px);

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      margin-top: ${({ theme }) => theme.spacing(5)} !important;
    }

    b {
      font-weight: ${({ theme }) => theme.font.weight.medium} !important;
      color: ${({ theme }) => theme.color.secondary.main};
      line-height: ${({ theme }) => theme.font.title[2].lineHeight};
      display: block;
    }

    span {
      display: block;
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.title[2].size};
      line-height: ${({ theme }) => theme.font.title[3].lineHeight};

      b {
        line-height: ${({ theme }) => theme.font.title[3].lineHeight};
      }
    }
  }
`;
