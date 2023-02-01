import { FCC } from '../../../types';

import { Paragraph } from './TextStyles';

interface TextTypes {
  color?: 'white' | 'black' | 'primary' | 'secondary' | 'error';
  size?: 'body1' | 'body2' | 'body3' | 'body4' | 'body5';
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold';
  cap?: 'default' | 'upper' | 'lower' | 'cap';
}

export const Text: FCC<TextTypes> = ({
  children,
  weight = 'regular',
  size = 'body1',
  color = 'secondary',
  cap = 'default',
}) => (
  <Paragraph size={size} weight={weight} color={color} cap={cap}>
    {children}
  </Paragraph>
);
