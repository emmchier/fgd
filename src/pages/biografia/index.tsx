import type { NextPage, GetStaticProps } from 'next';

interface BioPageProps {
  // bio: string;
}

const BioPage: NextPage<BioPageProps> = (/*{ bio }*/) => {
  return (
    <>
      <div>BioPage</div>
    </>
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
