import Head from 'next/head';
import React from 'react';
import Footer from '../../components/navigation/Footer';
import ShowProperty from '../../components/templates/ShowProperty';
import { getSingleProperty } from '../../lib/api';

function ShowPropertyWithId(props) {
  return (
    <>
      <Head>
        <title>Show Property</title>
      </Head>
      <ShowProperty data={props.data} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  // fetch data for a single meetup
  const propertyId = context.params.propertyId;

  const objectId = propertyId.split('-');
  const result = await getSingleProperty(objectId[0]);

  return {
    props: {
      data: JSON.parse(JSON.stringify(result)),
    },
  };
}

export default ShowPropertyWithId;
