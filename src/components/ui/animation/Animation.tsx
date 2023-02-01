import { FCC } from '../../../types';

import { fadeIn } from '../../../styles';

import { AnimationContent } from './AnimationStyles';

interface AnimationProps {
  animate?: any;
  lapse?: string;
}

export const Animation: FCC<AnimationProps> = ({ children, animate = fadeIn, lapse = '0.5' }) => (
  <AnimationContent animate={animate} lapse={lapse}>
    {children}
  </AnimationContent>
);
