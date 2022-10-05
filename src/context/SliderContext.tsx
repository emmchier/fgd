import { createContext } from 'react';

interface SliderContextProps {
  musicActive: boolean;
  homeActive: boolean;
  contactActive: boolean;

  // Methods
  onMusicActive: () => void;
  onHomeActive: () => void;
  onContactActive: () => void;
}

export const SliderContext = createContext({} as SliderContextProps);
