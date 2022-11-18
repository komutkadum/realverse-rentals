/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Profile from '../components/templates/Profile';

function profile() {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    router.push('/signin');
  }

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Profile />
    </>
  );
}

export default profile;
