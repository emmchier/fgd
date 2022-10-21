import React, { FC } from 'react';
import { Animation } from '../../../animation';
import { PageTitle } from '../../../page-title';

interface HomeTypes {
  onLoad?: boolean;
}

export const Home: FC<HomeTypes> = ({ onLoad }) => {
  return (
    <>
      {onLoad === true && (
        <Animation lapse="2.5">
          <PageTitle variant="h1">
            <b>FABRICIO</b>
            <span>GONZALEZ</span>
            <span>DIAZ</span>
          </PageTitle>
        </Animation>
      )}
    </>
  );
};
