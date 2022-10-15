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
