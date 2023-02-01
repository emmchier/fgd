import React from 'react';
import { FCC } from '../../../types';

import { Content } from './styles';

interface ContainerTypes {
  size?: 'sm' | 'md' | 'lg' | 'none';
}

export const Container: FCC<ContainerTypes> = ({ children, size = 'lg' }) => (
  <Content size={size}>{children}</Content>
);
