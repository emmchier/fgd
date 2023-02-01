import { useContext, useEffect } from 'react';

import type { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { SliderContext } from '../../context';

import { Page, PageTitle } from '../../components';

interface SingingHousesProps {
  // bio: string;
}

const SingingHousesPage: NextPage<SingingHousesProps> = (/*{ bio }*/) => {
  const { onSingingActive } = useContext(SliderContext);
  const { asPath } = useRouter();

  useEffect(() => {
    asPath === '/clases-de-canto' && onSingingActive();
  }, []);

  return (
    <Page title="Clases de canto" description="Descripción" keywords="lala, lala, lala">
      <PageTitle>
        CLASES DE<span>CANTO</span>
      </PageTitle>
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

export default SingingHousesPage;
