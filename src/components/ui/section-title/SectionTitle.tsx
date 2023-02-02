import { FCC } from '../../../types';

import { Heading } from '../../../components';

import { PageTitleContent } from './SectionTitleStyles';
import { useContext } from 'react';
import { SliderContext } from '../../../context';

interface PageTitleProps {
  color?: 'white' | 'black' | 'primary' | 'secondary' | 'error';
  variant?: 'h1' | 'h2';
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold';
}

export const PageTitle: FCC<PageTitleProps> = ({
  children,
  variant = 'h2',
  color = 'primary',
  weight = 'extraBold',
}) => {
  const { homeActive } = useContext(SliderContext);

  return (
    <PageTitleContent isHome={homeActive === true && true}>
      <Heading variant={variant} color={color} weight={weight} cap="upper">
        {children}
      </Heading>
    </PageTitleContent>
  );
};
