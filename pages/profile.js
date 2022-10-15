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

export default profile;
