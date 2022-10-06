import React, { FC } from 'react';

import { socialMediaList } from '../../../domain';

import { SocialMediaContent } from './SocialMediaStyles';

export const SocialMedia: FC = () => (
  <SocialMediaContent>
    {socialMediaList?.map((item) => (
      <li key={item.id}>
        <a href={item.to} target="_blank">
          {item.icon}
        </a>
      </li>
    ))}
  </SocialMediaContent>
);
