import React, { FC } from 'react';

import { Item } from './NavbarStyles';

interface NavbarItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavbarItem: FC<NavbarItemProps> = ({ label, isActive = false, onClick }) => {
  return (
    <Item active={isActive} label={label}>
      <span onClick={onClick}>
        <a>{label}</a>
      </span>
    </Item>
  );
};
