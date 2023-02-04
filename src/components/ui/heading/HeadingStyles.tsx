import styled, { css } from 'styled-components';

interface HeadingProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 'title1' | 'title2' | 'title3';
  weight: 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold';
  cap: 'default' | 'upper' | 'lower' | 'cap';
  color: 'white' | 'black' | 'primary' | 'secondaryMain' | 'secondaryDark' | 'error';
}

const sizeStyles = (size: string) =>
  ({
    title1: css`
      font-size: ${({ theme }) => theme.font.title[1].size};
      line-height: ${({ theme }) => theme.font.title[1].lineHeight};

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.font.title[2].size};
        line-height: ${({ theme }) => theme.font.title[2].lineHeight};
      }
    `,
    title2: css`
      font-size: ${({ theme }) => theme.font.title[2].size};
      line-height: ${({ theme }) => theme.font.title[2].lineHeight};

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.font.title[3].size};
        line-height: ${({ theme }) => theme.font.title[3].lineHeight};
      }
    `,
    title3: css`
      font-size: ${({ theme }) => theme.font.title[3].size};
      line-height: ${({ theme }) => theme.font.body[1].lineHeight};

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.font.body[1].size};
        line-height: ${({ theme }) => theme.font.body[1].lineHeight};
      }
    `,
  }[size]);

const weightStyles = (weight: string) =>
  ({
    regular: css`
      font-weight: ${({ theme }) => theme.font.weight.regular};
    `,
    medium: css`
      font-weight: ${({ theme }) => theme.font.weight.medium};
    `,
    semiBold: css`
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
    `,
    bold: css`
      font-weight: ${({ theme }) => theme.font.weight.bold};
    `,
    extraBold: css`
      font-weight: ${({ theme }) => theme.font.weight.extraBold};
    `,
  }[weight]);

const capStyles = (cap: string) =>
  ({
    default: css`
      text-transform: none !important;
    `,
    upper: css`
      text-transform: uppercase !important;
    `,
    lower: css`
      text-transform: lowercase !important;
    `,
    cap: css`
      text-transform: capitalize !important;
    `,
  }[cap]);

const colorStyles = (color: string) =>
  ({
    white: css`
      color: ${({ theme }) => theme.color.white};
    `,
    black: css`
      color: ${({ theme }) => theme.color.black};
    `,
    primary: css`
      color: ${({ theme }) => theme.color.primary.dark};
    `,
    secondaryMain: css`
      color: ${({ theme }) => theme.color.secondary.main};
    `,
    secondaryDark: css`
      color: ${({ theme }) => theme.color.secondary.dark};
    `,
    error: css`
      color: ${({ theme }) => theme.color.error};
    `,
  }[color]);

export const HeadingContent = styled.div<HeadingProps>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-style: normal;
    padding: 0;
    margin: 0 !important;
    ${({ weight }) => weightStyles(weight)};
    ${({ cap }) => capStyles(cap)};
    ${({ size }) => sizeStyles(size)};
    ${({ color }) => colorStyles(color)};

    b {
      color: ${({ theme }) => theme.color.secondary.main};
      font-weight: ${({ theme }) => theme.font.weight.bold} !important;
    }

    span {
      display: block;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 !important;
  }
`;

export const Heading1 = styled.h1``;

export const Heading2 = styled.h2``;

export const Heading3 = styled.h3``;

export const Heading4 = styled.h4``;

export const Heading5 = styled.h5``;

export const Heading6 = styled.h6``;
