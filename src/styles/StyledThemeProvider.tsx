import { ThemeProvider as MyStyledThemeProvider } from 'styled-components';

import { FCC } from '../types';
import { GlobalStyles, theme } from '../styles';

export const StyledThemeProvider: FCC = ({ children }) => (
  <MyStyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </MyStyledThemeProvider>
);
