import React, { FC } from 'react';

import { Animation, PageTitle, Songs } from '../../../../../components';

interface MusicPropTypes {
  songList: any[];
  onLoad?: boolean;
}

export const Music: FC<MusicPropTypes> = ({ songList, onLoad }) => {
  return (
    <>
      {onLoad === true && (
        <Animation lapse="1">
          <PageTitle>Música</PageTitle>
          <Songs items={songList} />
        </Animation>
      )}
    </>
  );
};
