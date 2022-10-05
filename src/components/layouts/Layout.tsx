import { FCC } from '../../types';
import { Navbar } from '../ui';

export const Layout: FCC = ({ children }) => {
  return (
    <main>
      {children}
      <Navbar />
    </main>
  );
};
