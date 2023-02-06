import React, { FC, useContext } from 'react';

import { Animation, Button, ChevronIcon, PageTitle, Songs } from '../../../../../components';
import { SliderContext } from '../../../../../context';
import { MusicType } from '../../../../../interfaces';
import { GradientBottom, MusicHeader } from './MusicStyles';

interface MusicPropTypes {
  songList: MusicType[];
  onLoad?: boolean;
}

export const Music: FC<MusicPropTypes> = ({ songList, onLoad }) => {
  const { musicActive } = useContext(SliderContext);

  return (
    <>
      {onLoad === true && (
        <Animation lapse="2">
          <MusicHeader isActive={musicActive}>
            <PageTitle>Música</PageTitle>
            <span>
              <Button variant="icon" classes="prev" ariaLabel="botón slider mobile prev">
                <ChevronIcon />
              </Button>
              <Button variant="icon" classes="next" ariaLabel="botón slider mobile next">
                <ChevronIcon />
              </Button>
            </span>
          </MusicHeader>
          <GradientBottom />
          <Songs items={songList} />
        </Animation>
      )}
    </>
  );
};
