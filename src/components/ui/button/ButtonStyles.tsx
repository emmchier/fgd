import styled, { css } from 'styled-components';

interface ButtonProps {
  variant: 'contained' | 'outlined' | 'ghost' | 'text' | 'icon' | 'nav';
  size: 'small' | 'medium';
  fullWidth: boolean;
  ariaLabel: string;
  iconRight: boolean;
  iconLeft: boolean;
}

const sizeStyles = (size: string) =>
  ({
    small: css`
      // paddings 0.625rem(10px) left-right + 0.5rem(8px) top-bottom
      font-size: ${({ theme }) => theme.font.body[3].size};
      line-height: ${({ theme }) => theme.font.body[3].lineHeight};
      padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2.3)}`};

      svg {
        width: 16px;
        height: 16px;
      }
    `,
    medium: css`
      // paddings 1.5rem(24px) left-right + 0.625rem(10px) top-bottom
      font-size: ${({ theme }) => theme.font.body[2].size};
      line-height: ${({ theme }) => theme.font.body[2].lineHeight};
      padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(6)}`};

      svg {
        width: 20px;
        height: 20px;
      }
    `,
  }[size]);

const variantStyles = (variant: string) =>
  ({
    contained: css`
      background: ${({ theme }) => theme.color.gradient.main};
      border: 1.5px solid ${({ theme }) => theme.color.primary.main};

      &:hover {
        background: ${({ theme }) => theme.color.gradient.dark};
      }

      &:focus,
      &:active {
        background: ${({ theme }) => theme.color.primary.dark};
      }

      &:disabled {
        background: ${({ theme }) => theme.color.background.light};
        border: 2px solid transparent;
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:focus,
        &:active {
          background: ${({ theme }) => theme.color.gradient.main};
        }
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        &:hover,
        &:focus,
        &:active {
          background: ${({ theme }) => theme.color.gradient.main};
        }
      }
    `,
    outlined: css`
      background: transparent;
      border: 1.5px solid ${({ theme }) => theme.color.primary.main};

      &:hover {
        background: ${({ theme }) => theme.color.background.light};
      }

      &:focus,
      &:active {
        background: ${({ theme }) => theme.color.background.dark};
      }

      &:disabled {
        background: transparent;
        border: 1.5px solid ${({ theme }) => theme.color.background.light};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:focus,
        &:active {
          background: transparent;
        }
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        &:hover,
        &:focus,
        &:active {
          background: transparent;
        }
      }
    `,
    ghost: css`
      background: transparent;
      border: 1.5px solid transparent;

      &:hover {
        background: ${({ theme }) => theme.color.background.light};
      }

      &:focus,
      &:active {
        background: ${({ theme }) => theme.color.background.dark};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:focus,
        &:active {
          color: ${({ theme }) => theme.color.secondary.dark};
          background: transparent;
          border: 1.5px solid transparent;
        }
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        &:hover,
        &:focus,
        &:active {
          color: ${({ theme }) => theme.color.secondary.dark};
          background: transparent;
          border: 1.5px solid transparent;
        }
      }
    `,
    text: css`
      padding: none;

      &:hover {
        color: ${({ theme }) => theme.color.black};
        svg {
          filter: brightness(0) saturate(100%) invert(37%) sepia(62%) saturate(1324%)
            hue-rotate(221deg) brightness(91%) contrast(107%) !important;
        }
      }

      &:focus,
      &:active {
        color: #000000;
        svg {
          filter: brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(7462%)
            hue-rotate(132deg) brightness(94%) contrast(108%);
        }
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:focus,
        &:active {
          color: ${({ theme }) => theme.color.secondary.dark};
          background: transparent;
        }
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        &:hover,
        &:focus,
        &:active {
          color: ${({ theme }) => theme.color.secondary.dark};
          background: transparent;
        }
      }
    `,
    icon: css`
      border-radius: ${({ theme }) => theme.border.radius.full};
      border: none;
      padding: ${({ theme }) => theme.spacing(2)} !important;
      background: transparent;

      &:hover {
        background: ${({ theme }) => theme.color.background.light};
      }

      &:focus,
      &:active {
        background: ${({ theme }) => theme.color.background.dark};
      }

      @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
        &:hover,
        &:focus,
        &:active {
          background: transparent;
        }
      }

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        &:hover,
        &:focus,
        &:active {
          background: transparent;
        }
      }
    `,
    nav: css``,
  }[variant]);

export const ButtonContent = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  transition: 0.2s ease-in-out;
  font-family: ${({ theme }) => theme.font.family};
  border-radius: ${({ theme }) => theme.border.radius.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.secondary.dark};
  ${({ variant }) => variantStyles(variant)};
  ${({ size }) => sizeStyles(size)};

  svg {
    filter: brightness(0) saturate(100%) invert(19%) sepia(15%) saturate(4545%) hue-rotate(4deg)
      brightness(93%) contrast(95%);
  }

  &:hover,
  &:focus,
  &:active {
    transition: 0.2s ease-in-out;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.secondary.light};
    cursor: inherit;

    svg {
      filter: brightness(0) saturate(100%) invert(66%) sepia(10%) saturate(1282%) hue-rotate(350deg)
        brightness(88%) contrast(88%);
    }
  }

  svg:nth-child(1) {
    margin-left: ${({ iconRight }) => (iconRight === true ? '10px' : '0')};
  }

  svg:nth-child(2) {
    margin-right: ${({ iconLeft }) => (iconLeft === true ? '10px' : '0')};
  }
`;
