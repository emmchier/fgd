import React from 'react';

import { FCC } from '../../../types';

import { ExpandibleSection } from './SliderStyles';

interface SliderItemTypes {
  active?: boolean;
}

export const SliderItem: FCC<SliderItemTypes> = ({ children, active = false }) => {
  return <ExpandibleSection expand={active}>{children}</ExpandibleSection>;
};
