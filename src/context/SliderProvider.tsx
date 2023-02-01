import { useReducer } from 'react';
import { FCC } from '../types';
import { SliderContext, sliderReducer } from './';

export interface SliderState {
  musicActive: boolean;
  homeActive: boolean;
  contactActive: boolean;
  bioActive: boolean;
  cookiesActive: boolean;
  policyActive: boolean;
  singingActive: boolean;
  loading: boolean;
  response: number;
}

const INITIAL_STATE: SliderState = {
  musicActive: false,
  homeActive: true,
  contactActive: false,
  bioActive: false,
  cookiesActive: false,
  policyActive: false,
  singingActive: false,
  loading: false,
  response: 0,
};

export const SliderProvider: FCC = ({ children }) => {
  const [state, dispatch] = useReducer(sliderReducer, INITIAL_STATE);

  const onMusicActive = () => dispatch({ type: '[Slider] - musicActive' });
  const onHomeActive = () => dispatch({ type: '[Slider] - homeActive' });
  const onContactActive = () => dispatch({ type: '[Slider] - contactActive' });
  const onBioActive = () => dispatch({ type: '[Slider] - bioActive' });
  const onCookiesActive = () => dispatch({ type: '[Slider] - cookiesActive' });
  const onPolicyActive = () => dispatch({ type: '[Slider] - policyActive' });
  const onSingingActive = () => dispatch({ type: '[Slider] - singingActive' });
  const showLoading = () => dispatch({ type: '[Slider] - showLoading' });
  const hideLoading = () => dispatch({ type: '[Slider] - hideLoading' });
  const showMessage = () => dispatch({ type: '[Slider] - showMessage' });
  const hideMessage = () => dispatch({ type: '[Slider] - hideMessage' });

  return (
    <SliderContext.Provider
      value={{
        ...state,
        onMusicActive,
        onHomeActive,
        onContactActive,
        onBioActive,
        onCookiesActive,
        onPolicyActive,
        onSingingActive,
        showLoading,
        hideLoading,
        showMessage,
        hideMessage,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};
