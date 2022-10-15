import Head from 'next/head';
import React from 'react';
import Footer from '../components/navigation/Footer';
import PrivacyPolicy from '../components/templates/PrivacyPolicy';

function termsandservices() {
  return (
    <>
      <Head>
        <title>Terms and services</title>
      </Head>
      <PrivacyPolicy />
      <Footer />
    </>
  );
}

export default termsandservices;
