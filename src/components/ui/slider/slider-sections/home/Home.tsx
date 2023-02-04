import React, { FC } from 'react';

import { Animation, Button, Heading, PageTitle } from '../../../../../components';

import { MainInfoContainer, SingingHousesBanner } from './HomeStyles';
import { useRouter } from 'next/router';

interface HomeTypes {
  onLoad?: boolean;
}

export const Home: FC<HomeTypes> = ({ onLoad }) => {
  const { push } = useRouter();

  return (
    <>
      {onLoad === true && (
        <Animation lapse="2">
          <MainInfoContainer>
            <PageTitle variant="h2" color="primary">
              Fabricio
              <b>Gonzalez</b>
              <b>Diaz</b>
            </PageTitle>
            <SingingHousesBanner>
              <Heading variant="h1" size="title3">
                Por clases de canto y mucho más
              </Heading>
              <Button
                onClick={() => push('/clases-de-canto')}
                ariaLabel="link a Clases de canto y más servicios"
                fullWidth
              >
                Consultar aquí
              </Button>
            </SingingHousesBanner>
          </MainInfoContainer>
        </Animation>
      )}
    </>
  );
};
