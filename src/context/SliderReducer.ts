import { SliderState } from './SliderProvider';

type SliderActionType =
  | { type: '[Slider] - musicActive' }
  | { type: '[Slider] - homeActive' }
  | { type: '[Slider] - contactActive' }
  | { type: '[Slider] - bioActive' }
  | { type: '[Slider] - cookiesActive' }
  | { type: '[Slider] - policyActive' }
  | { type: '[Slider] - singingActive' }
  | { type: '[Loading] - showLoading' }
  | { type: '[Loading] - hideLoading' }
  | { type: '[Slider] - setResponse' }
  | { type: '[SendedMessage] - showMessage' }
  | { type: '[SendedMessage] - hideMessage' }
  | { type: '[Banner] - showBanner' }
  | { type: '[Banner] - hideBanner' };

export const sliderReducer = (state: SliderState, action: SliderActionType): SliderState => {
  switch (action.type) {
    case '[Slider] - musicActive':
      return {
        ...state,
        musicActive: true,
        homeActive: false,
        contactActive: false,
        bioActive: false,
        singingActive: false,
        cookiesActive: false,
        policyActive: false,
      };
    case '[Slider] - homeActive':
      return {
        ...state,
        musicActive: false,
        homeActive: true,
        contactActive: false,
        bioActive: false,
        singingActive: false,
        cookiesActive: false,
        policyActive: false,
      };
    case '[Slider] - contactActive':
      return {
        ...state,
        musicActive: false,
        homeActive: false,
        contactActive: true,
        bioActive: false,
        singingActive: false,
        cookiesActive: false,
        policyActive: false,
      };
    case '[Slider] - bioActive':
      return {
        ...state,
        musicActive: false,
        homeActive: false,
        contactActive: false,
        bioActive: true,
        singingActive: false,
        cookiesActive: false,
        policyActive: false,
      };
    case '[Slider] - cookiesActive':
      return {
        ...state,
        musicActive: false,
        homeActive: false,
        contactActive: false,
        bioActive: false,
        singingActive: false,
        cookiesActive: true,
        policyActive: false,
      };
    case '[Slider] - policyActive':
      return {
        ...state,
        musicActive: false,
        homeActive: false,
        contactActive: false,
        bioActive: false,
        singingActive: false,
        cookiesActive: false,
        policyActive: true,
      };
    case '[Slider] - singingActive':
      return {
        ...state,
        musicActive: false,
        homeActive: false,
        contactActive: false,
        bioActive: false,
        singingActive: true,
        cookiesActive: false,
        policyActive: false,
      };
    case '[Loading] - showLoading':
      return {
        ...state,
        loading: true,
      };
    case '[Loading] - hideLoading':
      return {
        ...state,
        loading: false,
      };
    case '[SendedMessage] - showMessage':
      return {
        ...state,
        response: 200,
      };
    case '[SendedMessage] - hideMessage':
      return {
        ...state,
        response: 0,
      };
    case '[Banner] - showBanner':
      return {
        ...state,
        banner: true,
      };
    case '[Banner] - hideBanner':
      return {
        ...state,
        banner: false,
      };
    default:
      return state;
  }
};
