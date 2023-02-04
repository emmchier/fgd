import React, { FC } from 'react';

import { MusicType, SocialMediaType } from '../../../interfaces';
import { capitalizeFirstLetter } from '../../../utils';

import { Button, Heading, Hero, SpotifyIcon, Text, YoutubeIcon } from '../../../components';

import {
  ActionsContainer,
  CardContent,
  ImageContainer,
  InfoContainer,
  TitlesContainer,
} from './CardStyles';

export const Card: FC<MusicType> = ({
  img = '/assets/default-img.svg',
  alt = '',
  title = 'Card Title',
  year = 'Year',
  type = 'single',
  actions = [],
}) => {
  return (
    <CardContent>
      <ImageContainer>
        <Hero img={img} alt={alt} width="100%" height="100%" />
      </ImageContainer>
      <InfoContainer>
        <TitlesContainer>
          <Heading variant="h3" size="title3" weight="extraBold" cap="upper" color="secondaryMain">
            {title}
          </Heading>
          <Text size="body3" weight="medium">
            {year} - {capitalizeFirstLetter(type)}
          </Text>
        </TitlesContainer>
        <ActionsContainer>
          <Text size="body4" weight="medium">
            Escuchalo en
          </Text>
          <span>
            {actions?.map((action: SocialMediaType) => (
              <a key={action.type} href={action.link} target="_blank" rel="noopener noreferrer">
                <Button
                  size="small"
                  ariaLabel={`Link a ${capitalizeFirstLetter(action.type)}`}
                  iconLeft={true}
                  icon={action.type === 'spotify' ? <SpotifyIcon /> : <YoutubeIcon />}
                  fullWidth={actions?.length > 1 ? false : true}
                >
                  {capitalizeFirstLetter(action.type)}
                </Button>
              </a>
            ))}
          </span>
        </ActionsContainer>
      </InfoContainer>
    </CardContent>
  );
};
