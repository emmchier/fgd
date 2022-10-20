import React, { FC } from 'react';
import { Heading } from '../heading';

import { AnimationContainer, LoadingContent } from './LoadingStyles';

interface PropTypes {
  loading?: boolean;
}

export const Loading: FC<PropTypes> = ({ loading = false }) => {
  return (
    <LoadingContent onShowing={loading}>
      <AnimationContainer isLoading={loading}>
        <span>
          <div></div>
          <div></div>
          <div></div>
        </span>
        <Heading variant="h5" weight="light">
          Enviando...
        </Heading>
      </AnimationContainer>
    </LoadingContent>
  );
};
