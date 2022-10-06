import styled from 'styled-components';

export const SongsContent = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  overflow-y: scroll !important;
  position: relative;
  z-index: 999 !important;
  width: 30%;
  margin-top: ${({ theme }) => theme.spacing(8)};
  margin-left: ${({ theme }) => theme.spacing(10)};

  span {
    height: 150px;
    width: 30%;
    background: red;
    position: fixed;
    bottom: 0;
    background: linear-gradient(11.78deg, #fefbe7 55.72%, rgba(254, 251, 231, 0) 81.34%);
  }
`;
