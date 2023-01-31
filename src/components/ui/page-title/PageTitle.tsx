import { FCC } from '../../../types';

import { Heading } from '../../ui';

import { PageTitleContent } from './PageTitleStyles';

interface PageTitleProps {
  variant?: 'h1' | 'h2';
}

export const PageTitle: FCC<PageTitleProps> = ({ children, variant = 'h2' }) => {
  return (
    <PageTitleContent>
      <Heading variant={variant}>{children}</Heading>
    </PageTitleContent>
  );
};
