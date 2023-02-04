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
`;

export const InfoContainer = styled.div`
  height: 144px;
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(4)};
`;

export const TitlesContainer = styled.div`
  width: 100%;

  p {
    margin-top: ${({ theme }) => theme.spacing(1)};
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
`;
