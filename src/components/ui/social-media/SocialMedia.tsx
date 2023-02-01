import React, { FC } from 'react';

import { socialMediaList } from '../../../domain';
import { Button } from '../button';

import { SocialMediaContent } from './SocialMediaStyles';

export const SocialMedia: FC = () => (
  <SocialMediaContent>
    {socialMediaList?.map((item) => (
      <li key={item.id}>
        <a href={item.to} target="_blank">
          <Button variant="icon" ariaLabel={`${item.id} icon`}>
            {item.icon}
          </Button>
        </a>
      </li>
    ))}
  </SocialMediaContent>
);
