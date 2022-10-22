import Head from 'next/head';
import React from 'react';
import Signin from '../components/templates/Signin';

function signin() {
  return (
    <>
      <Head>
        <title>SignIn</title>
      </Head>
      <Signin />
    </>
  );
}

export default signin;
