import React from 'react';

import Link from 'next/link';

import { Text } from '../../../components';

import { BannerContent } from './BannerStyles';

export const Banner = () => {
  return (
    <BannerContent>
      <Text>
        Clases de canto y más <Link href="/clases-de-canto">Consultar</Link>
      </Text>
    </BannerContent>
  );
};
