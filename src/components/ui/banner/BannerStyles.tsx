import styled from 'styled-components';

export const BannerContent = styled.div`
  position: absolute;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    position: relative;
    z-index: 9;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray};

    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)};
      font-size: ${({ theme }) => theme.font.body[3].size};

      a {
        font-weight: bold;
      }
    }
  }
`;
