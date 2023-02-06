import styled, { css } from 'styled-components';

interface MusicHeaderProps {
  isActive?: boolean;
}

export const GradientBottom = styled.div`
  background: linear-gradient(
    359.59deg,
    #fefbe7 56.87%,
    rgba(254, 251, 231, 0.506579) 75.94%,
    rgba(254, 251, 231, 0) 95.51%
  );
  height: 200px;
  width: 39%;
  position: absolute;
  bottom: 0;
  z-index: 9999;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const MusicHeader = styled.div<MusicHeaderProps>`
  span {
    display: none;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 99999999999;

    ${({ isActive }) =>
      isActive === true &&
      css`
        padding: 0 ${({ theme }) => theme.spacing(4.5)} !important;
      `}

    span {
      display: flex;
      position: relative;
      z-index: 9999999;
      transform: translateY(10px);

      button {
        width: ${({ theme }) => theme.spacing(10)};
        height: ${({ theme }) => theme.spacing(10)};
        padding: ${({ theme }) => theme.spacing(3)} !important;
        border-radius: ${({ theme }) => theme.border.radius.small};
        background: ${({ theme }) => theme.color.background.dark};

        &:nth-child(1) {
          svg {
            transform: rotate(180deg);
          }
        }

        &:nth-child(2) {
          margin-left: ${({ theme }) => theme.spacing(3)};
        }

        &:focus,
        &:active {
          background: ${({ theme }) => theme.color.background.dark} !important;
        }
      }
    }
  }
`;
