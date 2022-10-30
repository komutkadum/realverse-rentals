import Head from 'next/head';
import React from 'react';
import { Blog } from '../components/templates/Blog';

function blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Blog />
    </>
  );
}

export default blog;
