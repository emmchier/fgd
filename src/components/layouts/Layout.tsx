import { useContext, useEffect } from 'react';
import { FCC } from '../../types';

import { useRouter } from 'next/router';

import { SliderContext } from '../../context';

import { Navbar, AsideInfo, Banner, Hero } from '../../components';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Layout: FCC = ({ children }) => {
  const { asPath } = useRouter();
  const { banner, showBanner, hideBanner } = useContext(SliderContext);

  useEffect(() => {
    banner === true ? showBanner() : hideBanner();
  }, []);

  return (
    <main>
      {banner === true && asPath !== '/clases-de-canto' && <Banner />}
      <AsideInfo>{children}</AsideInfo>

      <Navbar />
    </main>
  );
};
