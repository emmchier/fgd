import { css } from 'styled-components';

export const theme = {
  color: {
    background: {
      main: '#FEFBE7',
      light: '#FCEEC2',
      dark: '#FFE9A5',
    },
    primary: {
      light: '#FFDC75',
      main: '#F1C43D',
      dark: '#D7A71A',
    },
    secondary: {
      light: '#B4916C',
      main: '#7C5020',
      dark: '#552F06',
    },
    gradient: {
      light: ' linear-gradient(45deg, #FBE5A4 0%, rgba(251, 229, 164, 0) 100%);',
      main: 'linear-gradient(45deg, #F1C43D 0%, #FFDC75 100%);',
      dark: 'linear-gradient(45deg, #D7A71A 0%, #F1C43D 100%);',
    },
    black: '#252F3D',
    white: '#FFFFFF',
    gray: '#D9D9D9',
    error: '#FF4D00',
    overlay: '#00000069',
  },
  font: {
    family: "'Montserrat', 'sans-serif'",
    title: {
      1: {
        size: '2.5rem', // 40px
        lineHeight: '3.063rem', // 49px
      },
      2: {
        size: '1.875rem', // 30px
        lineHeight: '2.313rem', // 37px
      },
      3: {
        size: '1.25rem', // 20px
        lineHeight: '1.8rem', // 28.8px
      },
    },
    body: {
      1: {
        size: '1.125rem', // 18px
        lineHeight: '1.375rem', // 22px
      },
      2: {
        size: '1rem', // 16px
        lineHeight: '1.25rem', // 20px
      },
      3: {
        size: '0.875rem', // 14px
        lineHeight: '1.063rem', // 17px
      },
      4: {
        size: '0.75rem', // 12px
        lineHeight: '0.938rem', // 15px
      },
      5: {
        size: '0.625rem', // 10px
        lineHeight: '0.75rem', // 12px
      },
    },
    weight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
  spacing: (pixel: number) => `${0.25 * pixel}rem`,
  animation: (animate: any, lapse: string) =>
    css`
      animation: ${animate} ${`${parseFloat(lapse)}s`};
      -webkit-animation: ${animate} ${`${parseFloat(lapse)}s`};
      -moz-animation: ${animate} ${`${parseFloat(lapse)}s`};
      -ms-animation: ${animate} ${`${parseFloat(lapse)}s`};
      -o-animation: ${animate} ${`${parseFloat(lapse)}s`};
    `,
  shadow: {
    main: '2.08748px 0px 12.5249px rgba(0, 0, 0, 0.15)',
  },
  transition: {
    main: 'all 0.1s ease-in-out',
  },
  border: {
    radius: {
      small: '4px',
      medium: '8px',
      main: '12px',
      full: '50px',
    },
  },
  breakpoints: {
    smallMobile: 'max-width: 479px',
    mobile: 'max-width: 767px',
    tablet: 'max-width: 991px',
    tabletLandscape: 'max-width: 1199px',
    desktop: 'max-width: 1700px',
  },
};
