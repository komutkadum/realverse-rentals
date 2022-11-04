import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import React from 'react';
import Profile from '../components/templates/Profile';

function profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Profile />
    </>
  );
}

export default withPageAuthRequired(profile);
