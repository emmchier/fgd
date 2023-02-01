import { useContext, useEffect } from 'react';

import type { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { SliderContext } from '../../context';

import { Page, PageTitle } from '../../components';

interface BioPageProps {
  // bio: string;
}

const BioPage: NextPage<BioPageProps> = (/*{ bio }*/) => {
  const { onBioActive } = useContext(SliderContext);
  const { asPath } = useRouter();

  useEffect(() => {
    asPath === '/biografia' && onBioActive();
  }, []);

  return (
    <Page title="Biografía" description="Descripción" keywords="lala, lala, lala">
      <PageTitle>BIOGRAFÍA</PageTitle>
    </Page>
  );
};

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const data = await axios.get<ResponseType>('endpoint');

//   return {
//     props: {
//       prop: data,
//     },
//   };
// };

export default BioPage;
