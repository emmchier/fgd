import { ThemeProvider as MyStyledThemeProvider } from 'styled-components';
import { FCC } from '../types';
import { GlobalStyles } from './globalStyles';
import { theme } from './theme';

export const StyledThemeProvider: FCC = ({ children }) => (
  <MyStyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </MyStyledThemeProvider>
);
