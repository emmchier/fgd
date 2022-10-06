import React, { FC } from 'react';
import { SongsContent } from './SongsStyles';

interface SongsProps {
  items: any[];
}

export const Songs: FC<SongsProps> = ({ items = [] }) => {
  return (
    <SongsContent>
      <ul>
        <li>Song</li>
        <li>Song</li>
        <li>Song</li>
      </ul>
      <span></span>
    </SongsContent>
  );
};
