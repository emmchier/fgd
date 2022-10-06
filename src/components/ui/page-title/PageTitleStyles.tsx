import styled from 'styled-components';

export const PageTitleContent = styled.div`
  display: flex;
  position: relative;
  border-left: 2px solid ${({ theme }) => theme.color.primary.main};

  h1,
  h2 {
    margin-top: ${({ theme }) => theme.spacing(8)} !important;
    margin-left: ${({ theme }) => theme.spacing(2)} !important;
    transform: translateY(5px);
  }
`;
