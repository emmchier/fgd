import styled, { css } from 'styled-components';

interface NavbarTypes {
  active: boolean;
  label: string;
}

export const NavbarContent = styled.div`
  width: 100%;
  position: fixed;
  z-index: 9999;
  bottom: 0;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    box-shadow: ${({ theme }) => theme.shadow.main};
    background: ${({ theme }) => theme.color.background.main};
    position: fixed;
    z-index: 9999;
  }
`;

export const Nav = styled.nav`
  height: ${({ theme }) => theme.spacing(20)};
  padding: 0 ${({ theme }) => theme.spacing(10)};

  ul {
    margin: 0;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(4)};

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      justify-content: space-between;
      gap: 0;
    }

    li:nth-child(4) {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
      margin-right: ${({ theme }) => theme.spacing(10)};

      @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
        flex-grow: 0;
        margin-right: 0;
      }
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    height: auto;
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

export const Item = styled.li<NavbarTypes>`
  position: relative;

  ${({ active }) =>
    active === true
      ? css`
          button {
            background: ${({ theme }) => theme.color.background.light};
            pointer-events: none;
            border: 1.5px solid transparent;

            &:hover {
              background: ${({ theme }) => theme.color.background.light};
            }
          }
        `
      : css`
          button {
            background: transparent;
            pointer-events: all;
            border: 1.5px solid transparent;

            &:hover {
              background: ${({ theme }) => theme.color.background.light};
            }
          }
        `};

  svg {
    display: none;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 25%;
    min-width: 25%;
    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border: none;
      color: ${({ theme }) => theme.color.secondary.main};
      font-size: ${({ theme }) => theme.font.body[4].size} !important;
      line-height: ${({ theme }) => theme.font.body[4].lineHeight} !important;
      font-weight: ${({ theme }) => theme.font.weight.medium};
      padding: ${({ theme }) => theme.spacing(1.5)} !important;

      svg {
        display: block;
        width: ${({ theme }) => theme.spacing(7)} !important;
        height: ${({ theme }) => theme.spacing(7)} !important;
        margin-bottom: ${({ theme }) => theme.spacing(1)};
        filter: brightness(0) saturate(100%) invert(32%) sepia(39%) saturate(750%)
          hue-rotate(351deg) brightness(95%) contrast(94%);
      }
    }
  }
`;

export const FooterInfo = styled.div`
  display: none;
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    ul {
      margin-left: ${({ theme }) => theme.spacing(4)};
    }

    span {
      margin-right: ${({ theme }) => theme.spacing(4)};
      width: 100% !important;

      p {
        width: 100% !important;
      }
    }

    p,
    a {
      font-size: ${({ theme }) => theme.font.body[5].size};
      line-height: ${({ theme }) => theme.font.body[5].lineHeight};
    }
  }
`;
