/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ListProperty from '../components/templates/ListProperty';
import { INITIAL_DATA } from '../lib/constants';

function listproperty({ INITIAL_DATA }) {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    router.push('/signin');
  }
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

export default listproperty;
