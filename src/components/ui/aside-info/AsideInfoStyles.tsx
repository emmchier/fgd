import styled from 'styled-components';

export const AsideContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BarLeft = styled.aside`
  width: 20px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  z-index: 9;

  span {
    transform: rotate(-90deg) translateY(10px);

    div {
      display: flex;
      align-items: center;
      width: 200px;

      p {
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.color.secondary.main};
      }

      a {
        font-size: ${({ theme }) => theme.font.body[4].size};
        line-height: ${({ theme }) => theme.font.body[4].lineHeight};

        svg {
          filter: brightness(0) saturate(100%) invert(27%) sepia(93%) saturate(373%)
            hue-rotate(351deg) brightness(99%) contrast(90%);
          transform: translateY(1px);
          margin-left: ${({ theme }) => theme.spacing(0.5)};
          transition: ${({ theme }) => theme.transition.main};

          &:hover {
            transition: ${({ theme }) => theme.transition.main};
            filter: brightness(0) saturate(100%) invert(17%) sepia(88%) saturate(485%)
              hue-rotate(351deg) brightness(99%) contrast(99%);
          }
        }
      }
    }
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const BarRight = styled.aside`
  width: 20px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  z-index: 9;
  transform: translateX(-10px);

  span {
    transform: rotate(90deg) translateX(-180px);
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 350px;
      margin: 0;
      font-size: ${({ theme }) => theme.font.body[4].size};
      line-height: ${({ theme }) => theme.font.body[4].lineHeight};

      a {
        cursor: pointer;
        margin-right: ${({ theme }) => theme.spacing(3)};
        &:hover {
          color: #000000;
        }
      }
    }
    div {
      transform: rotate(90deg) translateY(-40px);
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  }
`;
