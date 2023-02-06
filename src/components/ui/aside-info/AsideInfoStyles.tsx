import styled, { css } from 'styled-components';

interface BarRightProps {
  isMusic?: boolean;
}

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
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const BarRight = styled.aside<BarRightProps>`
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

    div {
      transform: rotate(90deg) translateY(-40px);
    }

    @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  }
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    position: absolute;
    z-index: 0;
    transform: translateX(-20px);
    right: 0;

    ${({ isMusic }) =>
      isMusic === true &&
      css`
        display: none;
      `}
  }
`;
