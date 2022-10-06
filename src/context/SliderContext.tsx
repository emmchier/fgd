import { createContext } from 'react';

interface SliderContextProps {
  musicActive: boolean;
  homeActive: boolean;
  contactActive: boolean;
  bioActive: boolean;

  // Methods
  onMusicActive: () => void;
  onHomeActive: () => void;
  onContactActive: () => void;
  onBioActive: () => void;
}

export const SliderContext = createContext({} as SliderContextProps);
