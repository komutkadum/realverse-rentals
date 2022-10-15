import Head from 'next/head';
import Footer from '../components/navigation/Footer';
import About from '../components/templates/About';

function about() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <About />
      <Footer />
    </>
  );
}

export default about;
