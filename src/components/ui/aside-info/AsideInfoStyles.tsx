import styled from 'styled-components';

export const AsideContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BarLeft = styled.aside`
  width: 70px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  z-index: 9;

  span {
    transform: rotate(-90deg) translateY(36px);
    width: 500px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        margin: 0;
        padding: 0;
        font-size: 13px;
        line-height: 13px;
        color: ${({ theme }) => theme.color.secondary.main};
      }

      a {
        line-height: 13px;
        svg {
          filter: brightness(0) saturate(100%) invert(90%) sepia(63%) saturate(2683%)
            hue-rotate(326deg) brightness(79%) contrast(84%);
          transform: translateY(-2px);
          margin-left: ${({ theme }) => theme.spacing(0.5)};
          margin-right: ${({ theme }) => theme.spacing(3)};
          transition: ${({ theme }) => theme.transition.main};

          &:hover {
            transition: ${({ theme }) => theme.transition.main};
            filter: brightness(0) saturate(100%) invert(32%) sepia(9%) saturate(3866%)
              hue-rotate(350deg) brightness(93%) contrast(84%) !important;
          }
        }
      }
    }
  }
`;

export const BarRight = styled.aside`
  width: 80px;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  z-index: 9;

  span {
    transform: translateY(-160px) translateX(-160px) rotate(90deg);

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        width: 80%;
        margin: 0;
      }

      a {
        margin-right: ${({ theme }) => theme.spacing(5)};
        transition: ${({ theme }) => theme.transition.main};

        &:hover {
          color: ${({ theme }) => theme.color.primary.main};
          transition: ${({ theme }) => theme.transition.main};
        }
      }

      p,
      a {
        font-size: 13px;
        line-height: 13px;
        color: ${({ theme }) => theme.color.secondary.main};
      }
    }
  }
`;
