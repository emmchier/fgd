import React, { FC } from 'react';

import { Animation, PageTitle } from '../../../../../components';

interface HomeTypes {
  onLoad?: boolean;
}

export const Home: FC<HomeTypes> = ({ onLoad }) => {
  return (
    <>
      {onLoad === true && (
        <Animation lapse="2">
          <PageTitle variant="h1" color="primary">
            Fabricio
            <b>Gonzalez</b>
            <b>Diaz</b>
          </PageTitle>
        </Animation>
      )}
    </>
  );
};
