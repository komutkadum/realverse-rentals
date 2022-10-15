import Head from 'next/head';
import React from 'react';
import Activity from '../components/templates/Activity';

function activity() {
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
