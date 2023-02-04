import styled from 'styled-components';

export const MainInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SingingHousesBanner = styled.div`
  margin: ${({ theme }) => theme.spacing(10)} ${({ theme }) => theme.spacing(15)};
  padding: ${({ theme }) => theme.spacing(10)};
  background: ${({ theme }) => theme.color.background.light};
  border-radius: ${({ theme }) => theme.border.radius.main};
  width: 20%;

  button {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
