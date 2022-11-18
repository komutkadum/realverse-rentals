/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Activity from '../components/templates/Activity';

function activity() {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    router.push('/signin');
  }
  return (
    <>
      <Head>
        <title>Activity</title>
      </Head>
      <Activity />
    </>
  );
}

export default activity;
