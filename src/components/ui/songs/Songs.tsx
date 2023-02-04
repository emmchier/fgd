import React, { FC } from 'react';

import { MusicType } from '../../../interfaces';

import { Card, MusicSlideMobile } from '../../../components';

import { SongsContent, SongsItem, MobileSlider } from './SongsStyles';

interface SongsProps {
  items: MusicType[];
}

export const Songs: FC<SongsProps> = ({ items = [] }) => {
  return (
    <>
      <SongsContent>
        {items?.map((music: MusicType) => (
          <SongsItem key={music.title}>
            <Card
              img={music.img}
              alt={music.alt}
              title={music.title}
              year={music.year}
              type={music.type}
              actions={music.actions}
            />
          </SongsItem>
        ))}
        {/* </div> */}
      </SongsContent>
      <MobileSlider>
        <MusicSlideMobile items={items} />
      </MobileSlider>
    </>
  );
};
