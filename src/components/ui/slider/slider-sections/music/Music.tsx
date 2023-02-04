import React, { FC } from 'react';

import { Animation, PageTitle, Songs } from '../../../../../components';
import { MusicType } from '../../../../../interfaces';
import { GradientBottom } from './MusicStyles';

interface MusicPropTypes {
  songList: MusicType[];
  onLoad?: boolean;
}

export const Music: FC<MusicPropTypes> = ({ songList, onLoad }) => {
  return (
    <>
      {onLoad === true && (
        <Animation lapse="2">
          <PageTitle>Música</PageTitle>
          <GradientBottom />
          <Songs items={songList} />
        </Animation>
      )}
    </>
  );
};
