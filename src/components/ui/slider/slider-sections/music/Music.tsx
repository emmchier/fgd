import React, { FC } from 'react';
import { PageTitle } from '../../../page-title';
import { Songs } from '../../../songs';

interface SliderPropTypes {
  songList: any[];
}

export const Music: FC<SliderPropTypes> = ({ songList }) => {
  return (
    <>
      <PageTitle>
        <b>CANCIONES</b>
      </PageTitle>
      <Songs items={songList} />
    </>
  );
};
