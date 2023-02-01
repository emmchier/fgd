import { FCC } from '../../../types';

import { SpotifyIcon } from '../../../components';

import { ButtonContent } from './ButtonStyles';

interface ButtonTypes {
  type?: 'submit' | 'reset' | 'button';
  variant?: 'contained' | 'outlined' | 'ghost' | 'text' | 'icon' | 'nav';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  ariaLabel: string;
  disabled?: boolean;
  iconRight?: boolean;
  iconLeft?: boolean;
  icon?: React.ReactNode;
  onClick?: (e: any) => any;
}

export const Button: FCC<ButtonTypes> = ({
  children,
  type = 'button',
  size = 'medium',
  variant = 'contained',
  fullWidth = false,
  disabled = false,
  ariaLabel = '',
  iconRight = false,
  iconLeft = false,
  icon = <SpotifyIcon />,
  onClick,
}) => (
  <ButtonContent
    type={type}
    size={size}
    variant={variant}
    fullWidth={fullWidth}
    disabled={disabled}
    ariaLabel={ariaLabel}
    iconRight={iconRight}
    iconLeft={iconLeft}
    onClick={onClick}
  >
    {iconLeft && icon}
    {children}
    {iconRight && icon}
  </ButtonContent>
);
