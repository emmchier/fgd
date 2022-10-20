import { SliderState } from './SliderProvider';

type SliderActionType =
  | { type: '[Slider] - musicActive' }
  | { type: '[Slider] - homeActive' }
  | { type: '[Slider] - contactActive' }
  | { type: '[Slider] - bioActive' }
  | { type: '[Slider] - showLoading' }
  | { type: '[Slider] - hideLoading' }
  | { type: '[Slider] - setResponse' }
  | { type: '[Slider] - showMessage' }
  | { type: '[Slider] - hideMessage' };

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
    case '[Slider] - showLoading':
      return {
        ...state,
        loading: true,
      };
    case '[Slider] - hideLoading':
      return {
        ...state,
        loading: false,
      };
    case '[Slider] - showMessage':
      return {
        ...state,
        response: 200,
      };
    case '[Slider] - hideMessage':
      return {
        ...state,
        response: 0,
      };
    default:
      return state;
  }
};
