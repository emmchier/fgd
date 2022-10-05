import { useReducer } from 'react';
import { FCC } from '../types';
import { SliderContext, sliderReducer } from './';

export interface SliderState {
  musicActive: boolean;
  homeActive: boolean;
  contactActive: boolean;
}

const INITIAL_STATE: SliderState = {
  musicActive: false,
  homeActive: true,
  contactActive: false,
};

export const SliderProvider: FCC = ({ children }) => {
  const [state, dispatch] = useReducer(sliderReducer, INITIAL_STATE);

  const onMusicActive = () => dispatch({ type: '[Slider] - musicActive' });
  const onHomeActive = () => dispatch({ type: '[Slider] - homeActive' });
  const onContactActive = () => dispatch({ type: '[Slider] - contactActive' });

  return (
    <SliderContext.Provider value={{ ...state, onMusicActive, onHomeActive, onContactActive }}>
      {children}
    </SliderContext.Provider>
  );
};
