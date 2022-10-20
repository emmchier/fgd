import type { NextPage, GetStaticProps } from 'next';
import { Page, PageTitle } from '../../components';

interface BioPageProps {
  // bio: string;
}

const BioPage: NextPage<BioPageProps> = (/*{ bio }*/) => {
  return (
    <Page title="Biografía" description="Descripción" keywords="lala, lala, lala">
      <PageTitle>
        <b>BIOGRAFÍA</b>
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

export default BioPage;
