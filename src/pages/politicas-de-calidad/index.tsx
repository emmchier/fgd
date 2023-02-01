import { useContext, useEffect } from 'react';

import type { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { SliderContext } from '../../context';

import { Page, PageTitle } from '../../components';

interface QualityPolicyPageProps {
  // bio: string;
}

const QualityPolicyPage: NextPage<QualityPolicyPageProps> = (/*{ bio }*/) => {
  const { onPolicyActive } = useContext(SliderContext);
  const { asPath } = useRouter();

  useEffect(() => {
    asPath === '/politicas-de-calidad' && onPolicyActive();
  }, []);

  return (
    <Page title="Clases de canto" description="Descripción" keywords="lala, lala, lala">
      <PageTitle>
        POLITICAS DE <span>CALIDAD</span>
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

export default QualityPolicyPage;
