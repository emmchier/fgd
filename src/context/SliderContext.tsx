import { createContext } from 'react';

interface SliderContextProps {
  musicActive: boolean;
  homeActive: boolean;
  contactActive: boolean;
  bioActive: boolean;
  cookiesActive: boolean;
  policyActive: boolean;
  singingActive: boolean;
  loading: boolean;
  response: number;
  banner: boolean;

  // Methods
  onMusicActive: () => void;
  onHomeActive: () => void;
  onContactActive: () => void;
  onBioActive: () => void;
  onCookiesActive: () => void;
  onPolicyActive: () => void;
  onSingingActive: () => void;
  showLoading: () => void;
  hideLoading: () => void;
  showMessage: () => void;
  hideMessage: () => void;
  showBanner: () => void;
  hideBanner: () => void;
}

export const SliderContext = createContext({} as SliderContextProps);
