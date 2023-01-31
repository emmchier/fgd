import { FCC } from '../../../types';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  HeadingContent,
} from './HeadingStyles';

interface HeadingTypes {
  color?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'title1' | 'title2' | 'title3';
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold';
  cap?: 'default' | 'upper' | 'lower' | 'cap';
}

export const Heading: FCC<HeadingTypes> = ({
  children,
  variant = 'h1',
  size = 'title1',
  weight = 'medium',
  cap = 'default',
}) => {
  const setVariant = () => {
    switch (variant) {
      case 'h1':
        return <Heading1>{children}</Heading1>;
      case 'h2':
        return <Heading2>{children}</Heading2>;
      case 'h3':
        return <Heading3>{children}</Heading3>;
      case 'h4':
        return <Heading4>{children}</Heading4>;
      case 'h5':
        return <Heading5>{children}</Heading5>;
      case 'h6':
        return <Heading6>{children}</Heading6>;
      default:
        return <Heading3>{children}</Heading3>;
    }
  };

  return (
    <HeadingContent variant={variant} size={size} weight={weight} cap={cap}>
      {setVariant()}
    </HeadingContent>
  );
};
