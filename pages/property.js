import Head from 'next/head';
import React from 'react';
import Property from '../components/templates/Property';

function property() {
  return (
    <>
      <Head>
        <title>Properties</title>
      </Head>
      <Property />
    </>
  );
}

export default property;
