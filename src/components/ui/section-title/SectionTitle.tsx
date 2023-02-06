import { FCC } from '../../../types';

import { Heading } from '../../../components';

import { PageTitleContent } from './SectionTitleStyles';

interface PageTitleProps {
  color?: 'white' | 'black' | 'primary' | 'secondaryMain' | 'secondaryDark' | 'error';
  variant?: 'h1' | 'h2';
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold';
}

export const PageTitle: FCC<PageTitleProps> = ({
  children,
  variant = 'h2',
  color = 'primary',
  weight = 'extraBold',
}) => {
  return (
    <PageTitleContent>
      <Heading variant={variant} color={color} weight={weight} cap="upper">
        {children}
      </Heading>
    </PageTitleContent>
  );
};
