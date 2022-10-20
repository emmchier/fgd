import { createContext } from 'react';

interface SliderContextProps {
  musicActive: boolean;
  homeActive: boolean;
  contactActive: boolean;
  bioActive: boolean;
  loading: boolean;
  response: number;

  // Methods
  onMusicActive: () => void;
  onHomeActive: () => void;
  onContactActive: () => void;
  onBioActive: () => void;
  showLoading: () => void;
  hideLoading: () => void;
  showMessage: () => void;
  hideMessage: () => void;
}

export const SliderContext = createContext({} as SliderContextProps);
