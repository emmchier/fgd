import type { NextPage, GetStaticProps } from 'next';
import { Page } from '../components';
import { MusicTypes } from '../interfaces';

interface HomePageProps {
  music: MusicTypes[];
}

const HomePage: NextPage<HomePageProps> = (/*{ music }*/) => {
  return (
    <Page
      title="Fabricio Gonzalez Diaz | Website"
      description="Descripción"
      keywords="lala, lala, lala"
    >
      <div>HomePage</div>
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

export default HomePage;
