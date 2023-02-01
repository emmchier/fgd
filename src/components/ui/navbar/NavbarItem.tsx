import React, { FC } from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import { Button } from '../button';

import { Item } from './NavbarStyles';

interface NavbarItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavbarItem: FC<NavbarItemProps> = ({ label, isActive = false, onClick }) => {
  const isMobile = useIsMobile();

  return (
    <Item active={isActive} label={label}>
      <Button
        onClick={onClick}
        variant={isMobile ? 'nav' : 'ghost'}
        ariaLabel={`Link de Pantalla ${label} ${isActive === true ? 'activo' : 'inactivo'}`}
      >
        {label}
      </Button>
    </Item>
  );
};
