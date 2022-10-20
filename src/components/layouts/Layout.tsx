import { FCC } from '../../types';

import { Navbar, AsideInfo } from '../ui';

export const Layout: FCC = ({ children }) => {
  return (
    <main>
      <AsideInfo>{children}</AsideInfo>
      <Navbar />
    </main>
  );
};
