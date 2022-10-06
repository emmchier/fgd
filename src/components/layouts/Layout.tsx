import { FCC } from '../../types';

import { Navbar } from '../ui';
import { AsideInfo } from '../ui/aside-info/AsideInfo';

export const Layout: FCC = ({ children }) => {
  return (
    <main>
      <AsideInfo>{children}</AsideInfo>
      <Navbar />
    </main>
  );
};
