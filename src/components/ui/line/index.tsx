import React, { FC } from 'react';

import { Content } from './styles';

interface LineTypes {
  width?: string;
  height?: string;
  moveTo?: string;
  margin?: string;
  padding?: string;
}

export const Line: FC<LineTypes> = ({
  width = '0',
  height = '2px',
  moveTo = '(0, 0)',
  margin = '0',
  padding = '0',
}) => <Content width={width} height={height} moveTo={moveTo} margin={margin} padding={padding} />;
