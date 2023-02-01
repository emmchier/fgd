import React, { FC } from 'react';
import { Button } from '../button';

import { Item } from './NavbarStyles';

interface NavbarItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavbarItem: FC<NavbarItemProps> = ({ label, isActive = false, onClick }) => {
  return (
    <Item active={isActive} label={label}>
      <Button
        onClick={onClick}
        variant="ghost"
        ariaLabel={`Link de Pantalla ${label} ${isActive === true ? 'activo' : 'inactivo'}`}
      >
        {label}
      </Button>
    </Item>
  );
};
