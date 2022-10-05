import { SliderState } from './SliderProvider';

type SliderActionType =
  | { type: '[Slider] - musicActive' }
  | { type: '[Slider] - homeActive' }
  | { type: '[Slider] - contactActive' };

export const sliderReducer = (state: SliderState, action: SliderActionType): SliderState => {
  switch (action.type) {
    case '[Slider] - musicActive':
      return {
        ...state,
        musicActive: true,
        homeActive: false,
        contactActive: false,
      };
    case '[Slider] - homeActive':
      return {
        ...state,
        musicActive: false,
        homeActive: true,
        contactActive: false,
      };
    case '[Slider] - contactActive':
      return {
        ...state,
        musicActive: false,
        homeActive: false,
        contactActive: true,
      };
    default:
      return state;
  }
};
