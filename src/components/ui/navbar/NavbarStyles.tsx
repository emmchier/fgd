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
  margin: 0 ${({ theme }) => theme.spacing(12)};
  ul {
    margin: 0;
    display: flex;
    align-items: center;
    margin: ${({ theme }) => theme.spacing(6)};
  }

  li:last-child {
    flex-grow: 1;
    text-align: end;
  }
`;

export const Item = styled.li<NavbarTypes>`
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  position: relative;

  ${({ active }) =>
    active === true
      ? css`
          span {
            border: 1px solid ${({ theme }) => theme.color.primary.main};
            border-radius: ${({ theme }) => theme.border.radius.main};
            pointer-events: none;

            a {
              font-weight: ${({ theme }) => theme.font.weight.bold};
              color: ${({ theme }) => theme.color.primary.main};
            }
          }
        `
      : css`
          span {
            border: 1px solid transparent;

            a {
              font-weight: ${({ theme }) => theme.font.weight.medium};
              color: ${({ theme }) => theme.color.secondary.main};
            }
          }
        `};

  span {
    cursor: pointer;
    padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
    a {
      transition: ${({ theme }) => theme.transition.main};
    }
  }

  a:hover {
    transition: ${({ theme }) => theme.transition.main};
    color: ${({ theme }) => theme.color.primary.main};
  }
`;
