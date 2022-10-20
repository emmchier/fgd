import React, { FC } from 'react';
import { Button } from '../button';
import { SnackbarContent } from './SnackbarStyles';

interface PropTypes {
  message?: string | React.ReactNode;
  action?: React.ReactNode;
  show?: boolean;
  position?: string;
  setShow: (e: boolean) => void;
  background?: string;
}

export const Snackbar: FC<PropTypes> = ({
  message = '',
  show = false,
  position = 'bottomFull',
  background = 'dark',
  setShow,
  action = (
    <Button onClick={() => setShow(false)} ariaLabel="close message">
      {/* <CloseIcon ariaLabel="close icon" /> */}X
    </Button>
  ),
}) => (
  <SnackbarContent position={position} show={show} background={background}>
    {message}
    {action}
  </SnackbarContent>
);
