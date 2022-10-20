import { FCC } from '../../../types';
import { Content } from './AnimationStyles';
import { fadeIn } from '../../../styles';

interface AnimationProps {
  animate?: any;
  lapse?: string;
}

export const Animation: FCC<AnimationProps> = ({ children, animate = fadeIn, lapse = '1s' }) => (
  <Content animate={animate} lapse={lapse}>
    {children}
  </Content>
);
