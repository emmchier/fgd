import { SliderState } from './SliderProvider';

type SliderActionType =
  | { type: '[Slider] - musicActive' }
  | { type: '[Slider] - homeActive' }
  | { type: '[Slider] - contactActive' }
  | { type: '[Slider] - bioActive' };

export const sliderReducer = (state: SliderState, action: SliderActionType): SliderState => {
  switch (action.type) {
    case '[Slider] - musicActive':
      return {
        ...state,
        musicActive: true,
        homeActive: false,
        contactActive: false,
        bioActive: false,
      };
    case '[Slider] - homeActive':
      return {
        ...state,
        musicActive: false,
        homeActive: true,
        contactActive: false,
        bioActive: false,
      };
    case '[Slider] - contactActive':
      return {
        ...state,
        musicActive: false,
        homeActive: false,
        contactActive: true,
        bioActive: false,
      };
    case '[Slider] - bioActive':
      return {
        ...state,
        musicActive: false,
        homeActive: false,
        contactActive: false,
        bioActive: true,
      };
    default:
      return state;
  }
};
