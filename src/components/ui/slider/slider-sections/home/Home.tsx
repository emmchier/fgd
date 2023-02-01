import React, { FC } from 'react';

import { Animation } from '../../../animation';
import { PageTitle } from '../../../section-title';

interface HomeTypes {
  onLoad?: boolean;
}

export const Home: FC<HomeTypes> = ({ onLoad }) => {
  return (
    <>
      {onLoad === true && (
        <Animation lapse="2">
          <PageTitle variant="h1" color="primary">
            FABRICIO
            <b>GONZALEZ</b>
            <b>DIAZ</b>
          </PageTitle>
        </Animation>
      )}
    </>
  );
};
