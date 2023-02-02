import styled from 'styled-components';

interface HeroContentProps {
  width?: number;
  height?: number;
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const HeroContent = styled.div<HeroContentProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
`;
