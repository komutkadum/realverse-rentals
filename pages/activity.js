import { withPageAuthRequired } from '@auth0/nextjs-auth0';
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

export const getServerSideProps = withPageAuthRequired();

export default activity;
