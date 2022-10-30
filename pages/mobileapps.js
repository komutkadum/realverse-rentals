import Head from 'next/head';
import React from 'react';
import Footer from '../components/navigation/Footer';
import { MobileApps } from '../components/templates/MobileApps';

function mobileapps() {
  return (
    <>
      <Head>
        <title>Mobile Apps</title>
      </Head>
      <MobileApps />
      <Footer />
    </>
  );
}

export default mobileapps;
