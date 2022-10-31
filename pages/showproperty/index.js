import Head from 'next/head';
import React from 'react';
import Footer from '../../components/navigation/Footer';
import ShowProperty from '../../components/templates/ShowProperty';

function showproperty() {
  return (
    <>
      <Head>
        <title>Show Property</title>
      </Head>
      <ShowProperty />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default showproperty;
