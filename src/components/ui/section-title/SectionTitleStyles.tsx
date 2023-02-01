import styled from 'styled-components';

export const PageTitleContent = styled.div`
  display: flex;
  position: relative;
  border-left: 2px solid ${({ theme }) => theme.color.secondary.dark};

  h1,
  h2 {
    font-size: ${({ theme }) => theme.font.title[1].size};
    line-height: ${({ theme }) => theme.font.title[2].lineHeight};
    margin-top: ${({ theme }) => theme.spacing(8)} !important;
    margin-left: ${({ theme }) => theme.spacing(2)} !important;
    transform: translateY(5px);

    b {
      font-weight: ${({ theme }) => theme.font.weight.medium} !important;
      color: ${({ theme }) => theme.color.secondary.main};
      line-height: ${({ theme }) => theme.font.title[2].lineHeight};
      display: block;
    }

    span {
      display: block;
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.font.title[2].size};
      line-height: ${({ theme }) => theme.font.title[3].lineHeight};

      b {
        line-height: ${({ theme }) => theme.font.title[3].lineHeight};
      }
    }
  }
`;
