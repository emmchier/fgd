import { FCC } from '../../../types';

import { Heading, Line } from '../../ui';

import { PageTitleContent } from './PageTitleStyles';

interface PageTitleProps {
  variant?: string;
}

export const PageTitle: FCC<PageTitleProps> = ({ children, variant = 'h2' }) => {
  return (
    <PageTitleContent>
      <Heading variant={variant}>{children}</Heading>
    </PageTitleContent>
  );
};
