import type { NextPage, GetStaticProps } from 'next';
import { Page, Hero } from '../components';
import { Slider } from '../components/ui/slider/Slider';
import { MusicTypes } from '../interfaces';

interface HomePageProps {
  music: MusicTypes[];
}

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <Page
      title="Fabricio Gonzalez Diaz | Website"
      description="Descripción"
      keywords="lala, lala, lala"
    >
      <Hero />
      <Slider />
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
