import { useReducer } from 'react';
import { FCC } from '../types';
import { SliderContext, sliderReducer } from './';

export interface SliderState {
  musicActive: boolean;
  homeActive: boolean;
  contactActive: boolean;
  bioActive: boolean;
  loading: boolean;
  response: number;
}

const INITIAL_STATE: SliderState = {
  musicActive: false,
  homeActive: true,
  contactActive: false,
  bioActive: false,
  loading: false,
  response: 0,
};

export const SliderProvider: FCC = ({ children }) => {
  const [state, dispatch] = useReducer(sliderReducer, INITIAL_STATE);

  const onMusicActive = () => dispatch({ type: '[Slider] - musicActive' });
  const onHomeActive = () => dispatch({ type: '[Slider] - homeActive' });
  const onContactActive = () => dispatch({ type: '[Slider] - contactActive' });
  const onBioActive = () => dispatch({ type: '[Slider] - bioActive' });
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
