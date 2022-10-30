import Head from 'next/head';
import Footer from '../components/navigation/Footer';
import HomePage from '../components/templates/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomePage />
      <Footer />
    </>
  );
}

// export async function getStaticProps() {
//   try {
//     const result = await getList();
//     return {
//       props: {
//         result: JSON.stringify(result),
//       },
//       revalidate: 10,
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       props: { isConnected: false },
//     };
//   }
// }
