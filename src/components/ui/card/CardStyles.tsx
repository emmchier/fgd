import styled from 'styled-components';

export const CardContent = styled.article`
  border-radius: ${({ theme }) => theme.border.radius.main};
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.main};
  padding: ${({ theme }) => theme.spacing(4)};
  margin: 0 ${({ theme }) => theme.spacing(3)};
  overflow: hidden;
  display: flex;
  align-items: center;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    margin: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)}
      ${({ theme }) => theme.spacing(8)};
  }
`;

export const ImageContainer = styled.div`
  width: 149px;
  height: 144px;
  border-radius: ${({ theme }) => theme.spacing(2)};
  overflow: hidden;

  img {
    width: 149px;
    height: 144px;
    filter: grayscale();
    object-fit: contain !important;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    height: 23vh;
    width: 100%;

    img {
      object-fit: cover !important;
    }
  }
`;

export const InfoContainer = styled.div`
  height: 144px;
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(4)};

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 22vh;
    margin-left: 0;
    margin-top: ${({ theme }) => theme.spacing(4)};

    p {
      font-size: ${({ theme }) => theme.font.body[3].size};
      line-height: ${({ theme }) => theme.font.body[3].lineHeight};
    }
  }
`;

export const TitlesContainer = styled.div`
  width: 100%;

  p {
    margin-top: ${({ theme }) => theme.spacing(1)};

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      margin-bottom: ${({ theme }) => theme.spacing(4)};
    }
  }
`;

export const ActionsContainer = styled.div`
  width: 100%;

  p {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    a {
      width: 100% !important;

      button {
        width: 100% !important;
      }

      &:nth-child(2) {
        margin-left: ${({ theme }) => theme.spacing(3.5)};
      }
    }
  }
`;
