import React from 'react';

import { FCC } from '../../../types';

import { ContainerContent } from './ContainerStyles';

interface ContainerTypes {
  size?: 'sm' | 'md' | 'lg' | 'none';
}

export const Container: FCC<ContainerTypes> = ({ children, size = 'lg' }) => (
  <ContainerContent size={size}>{children}</ContainerContent>
);
