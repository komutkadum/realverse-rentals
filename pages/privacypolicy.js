import Head from 'next/head';
import React from 'react';
import Footer from '../components/navigation/Footer';
import PrivacyPolicy from '../components/templates/PrivacyPolicy';

function privacypolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <PrivacyPolicy />
      <Footer />
    </>
  );
}

export default privacypolicy;
