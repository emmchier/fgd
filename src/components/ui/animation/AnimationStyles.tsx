import styled from 'styled-components';

interface PropTypes {
  animate: any;
  lapse: string;
}

export const AnimationContent = styled.div<PropTypes>`
  width: 100%;
  height: 100%;
  ${({ theme, animate, lapse }) => theme.animation(animate, lapse)};
`;
