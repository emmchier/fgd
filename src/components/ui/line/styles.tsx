import styled from 'styled-components';

export const Content = styled.div`
  width: ${({ theme }) => theme.spacing(15)};
  border-radius: ${({ theme }) => theme.border.radius.main};
  background-color: ${({ theme }) => theme.color.primary.main};
  height: 2px;
`;
