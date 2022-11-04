import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import ListProperty from '../components/templates/ListProperty';
import { INITIAL_DATA } from '../lib/constants';

function listproperty({ INITIAL_DATA }) {
  return (
    <>
      <Head>
        <title>List Property</title>
      </Head>
      <ListProperty INITIAL_DATA={INITIAL_DATA} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      INITIAL_DATA,
    },
  };
}

export default withPageAuthRequired(listproperty);
