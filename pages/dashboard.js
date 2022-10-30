import Head from 'next/head';
import React from 'react';
import Dashboard from '../components/templates/Dashboard';

function dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Dashboard />
    </>
  );
}

export default dashboard;
