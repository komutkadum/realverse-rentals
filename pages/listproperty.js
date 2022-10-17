import Head from 'next/head';
import ListProperty from '../components/templates/ListProperty';

function listproperty() {
  return (
    <>
      <Head>
        <title>List Property</title>
      </Head>
      <ListProperty />
    </>
  );
}

export default listproperty;
