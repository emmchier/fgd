import React from 'react';
import { FCC } from '../../../types';
import { Section } from './SliderStyles';

interface SliderItemTypes {
  active?: boolean;
}

export const SliderItem: FCC<SliderItemTypes> = ({ children, active = false }) => {
  return <Section expand={active}>{children}</Section>;
};
