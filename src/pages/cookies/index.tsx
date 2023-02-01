import type { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Page, PageTitle } from '../../components';
import { SliderContext } from '../../context';

interface CookiesPageProps {
  // bio: string;
}

const CookiesPage: NextPage<CookiesPageProps> = (/*{ bio }*/) => {
  const { onCookiesActive } = useContext(SliderContext);
  const { asPath } = useRouter();

  useEffect(() => {
    asPath === '/cookies' && onCookiesActive();
  }, []);

  return (
    <Page title="Clases de canto" description="Descripción" keywords="lala, lala, lala">
      <PageTitle>COOKIES</PageTitle>
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

export default CookiesPage;
