import styled, { css } from 'styled-components';

interface NavbarTypes {
  active: boolean;
  label: string;
}

export const Content = styled.div`
  width: 100%;
  position: fixed;
  z-index: 99;
  bottom: 0;
`;

export const Nav = styled.nav`
  height: ${({ theme }) => theme.spacing(20)};
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
`;

export const Item = styled.li<NavbarTypes>`
  position: relative;

  ${({ active }) =>
    active === true &&
    css`
      button {
        background: ${({ theme }) => theme.color.background.light};
        pointer-events: none;
        border: 1.5px solid transparent;

        &:hover {
          background: ${({ theme }) => theme.color.background.light};
        }
      }
    `};
`;
