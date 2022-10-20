import React, { FC, useContext, useEffect, useState } from 'react';
import { SliderContext } from '../../../context';
import { Button } from '../button';
import { Heading } from '../heading';
import { SendedContent } from './FormStyles';

export const SendedMessage: FC = () => {
  const { hideMessage, response } = useContext(SliderContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    response === 200 ? setShow(true) : setShow(false);
  }, [response]);

  return (
    <>
      {show === true && (
        <SendedContent>
          <Heading variant="h5" weight="light">
            Recibí tu mensaje'
          </Heading>
          <p>En breve te respondo.</p>
          <Button onClick={hideMessage} ariaLabel="back to home" variant="outlined">
            Volver al inicio
          </Button>
        </SendedContent>
      )}
    </>
  );
};
