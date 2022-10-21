import React, { FC } from 'react';
import { Animation } from '../../../animation';
import { PageTitle } from '../../../page-title';
import { Songs } from '../../../songs';

interface MusicPropTypes {
  songList: any[];
  onLoad?: boolean;
}

export const Music: FC<MusicPropTypes> = ({ songList, onLoad }) => {
  return (
    <>
      {onLoad === true && (
        <Animation lapse="2.5">
          <PageTitle>
            <b>CANCIONES</b>
          </PageTitle>
          <Songs items={songList} />
        </Animation>
      )}
    </>
  );
};
