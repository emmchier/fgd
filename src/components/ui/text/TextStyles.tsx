import styled, { css } from 'styled-components';

interface TextProps {
  size: 'body1' | 'body2' | 'body3' | 'body4' | 'body5';
  weight: 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold';
  cap: 'default' | 'upper' | 'lower' | 'cap';
  color: 'white' | 'black' | 'primary' | 'secondary' | 'error';
}

const sizeStyles = (size: string) =>
  ({
    body1: css`
      font-size: ${({ theme }) => theme.font.body[1].size};
      line-height: ${({ theme }) => theme.font.body[1].lineHeight};

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.font.body[2].size};
        line-height: ${({ theme }) => theme.font.body[2].lineHeight};
      }
    `,
    body2: css`
      font-size: ${({ theme }) => theme.font.body[2].size};
      line-height: ${({ theme }) => theme.font.body[2].lineHeight};

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.font.body[3].size};
        line-height: ${({ theme }) => theme.font.body[3].lineHeight};
      }
    `,
    body3: css`
      font-size: ${({ theme }) => theme.font.body[3].size};
      line-height: ${({ theme }) => theme.font.body[3].lineHeight};

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.font.body[4].size};
        line-height: ${({ theme }) => theme.font.body[4].lineHeight};
      }
    `,
    body4: css`
      font-size: ${({ theme }) => theme.font.body[4].size};
      line-height: ${({ theme }) => theme.font.body[4].lineHeight};

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.font.body[5].size};
        line-height: ${({ theme }) => theme.font.body[5].lineHeight};
      }
    `,
    body5: css`
      font-size: ${({ theme }) => theme.font.body[5].size};
      line-height: ${({ theme }) => theme.font.body[5].lineHeight};
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
      text-transform: none;
    `,
    upper: css`
      text-transform: uppercase;
    `,
    lower: css`
      text-transform: lowercase;
    `,
    cap: css`
      text-transform: capitalize;
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
    secondary: css`
      color: ${({ theme }) => theme.color.secondary.dark};
    `,
    error: css`
      color: ${({ theme }) => theme.color.error};
    `,
  }[color]);

export const Paragraph = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.font.body[1].size};
  line-height: ${({ theme }) => theme.font.body[1].lineHeight};
  font-style: normal;
  padding: 0;
  margin: 0;
  ${({ weight }) => weightStyles(weight)};
  ${({ cap }) => capStyles(cap)};
  ${({ color }) => colorStyles(color)};
  ${({ size }) => sizeStyles(size)};

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.font.body[2].size};
    line-height: ${({ theme }) => theme.font.body[2].lineHeight};
  }
`;
