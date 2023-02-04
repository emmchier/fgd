import styled from 'styled-components';

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
