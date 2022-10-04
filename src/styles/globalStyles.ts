import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Yesteryear&display=swap'); */
  body,
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.medium};
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
  }
  * {
    text-decoration: none;
    list-style: none;
  }
  ul {
    padding: 0;
  }
  p {
    color: ${({ theme }) => theme.color.text.primary};
  }
  a {
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.color.text.primary};
  }
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
