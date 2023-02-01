import React from 'react';

import { Text, DisandevBrand, DisandevIsotype } from '../../../components';

import { PoweredContent, Desk, Mob } from './PoweredStyles';

export const Powered = () => (
  <PoweredContent>
    <Text size="body4">Powered by</Text>
    <a href="https://disandev.com" target="_blank">
      <Desk>
        <DisandevBrand />
      </Desk>
      <Mob>
        <DisandevIsotype />
      </Mob>
    </a>
  </PoweredContent>
);
