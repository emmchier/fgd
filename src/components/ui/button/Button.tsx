import { FCC } from '../../../types';
import { ButtonContent } from './ButtonStyles';

interface ButtonTypes {
  type?: 'submit' | 'reset' | 'button';
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined' | 'text';
  fullWidth?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: (e: any) => any;
}

export const Button: FCC<ButtonTypes> = ({
  children,
  type = 'button',
  color = 'primary',
  variant = 'contained',
  fullWidth = false,
  disabled = false,
  ariaLabel = '',
  onClick,
}) => (
  <ButtonContent
    type={type}
    color={color}
    variant={variant}
    fullWidth={fullWidth}
    disabled={disabled}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {children}
  </ButtonContent>
);
