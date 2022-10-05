import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`;

export const Nav = styled.nav`
  ul {
    margin: 0;
    display: flex;
    align-items: center;

    li {
      font-size: ${({ theme }) => theme.font.size.small};
      font-weight: ${({ theme }) => theme.font.weight.medium};

      a {
        transition: ${({ theme }) => theme.transition.main};
      }

      a:hover {
        transform: scale(1.05) !important;
        color: ${({ theme }) => theme.color.secondary.main};
        font-weight: ${({ theme }) => theme.font.weight.semiBold};
        transition: ${({ theme }) => theme.transition.main};
        cursor: pointer;
      }
    }

    li:last-child {
      flex-grow: 1;
      text-align: end;
    }
  }
`;
