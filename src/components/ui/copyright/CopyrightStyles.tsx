import styled from 'styled-components';

export const CopyrightList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 350px;
  margin: 0;
  font-size: ${({ theme }) => theme.font.body[4].size};
  line-height: ${({ theme }) => theme.font.body[4].lineHeight};
  transform: translateX(-30px);

  a {
    cursor: pointer;
    margin-right: ${({ theme }) => theme.spacing(3)};
    &:hover {
      color: #000000;
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    transform: translateX(0);
    justify-content: flex-start;

    a {
      margin-right: 0;
      margin-left: ${({ theme }) => theme.spacing(2)};
    }

    li {
      &:nth-child(3) {
        transform: translateY(1px);
      }

      &:nth-child(1) {
        order: 1;
      }

      &:nth-child(2) {
        order: 2;
      }
    }

    div {
      display: none;
    }
  }
`;
