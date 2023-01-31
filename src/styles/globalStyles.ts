import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body,
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-y: hidden;
    background: ${({ theme }) => theme.color.background.main};
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.body[1].size};
    line-height: ${({ theme }) => theme.font.body[1].lineHeight};
  }

  * {
    text-decoration: none;
    list-style: none;
  }

  ul {
    padding: 0;
  }

  p, li, a {
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.color.secondary.dark};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
