import Head from 'next/head';
import React from 'react';
import Property from '../components/templates/Property';
import clientPromise from '../lib/mongodb';

function property({ data, search, priceRange, ro, fu, count }) {
  return (
    <>
      <Head>
        <title>Properties</title>
      </Head>
      <Property
        dataprops={data}
        rooms={ro}
        furnishing={fu}
        search={search}
        totalProperty={count}
        priceRange={priceRange}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const { search, pr, ro, fu } = context.query;
  console.log(search, pr, ro, fu);
  console.log(pr.split('-')[0], pr.split('-')[1]);

  const client = await clientPromise;
  const collection = await client
    .db(process.env.MONGODB_DB)
    .collection('property');
  const result = await collection
    .find({
      locality: { $regex: `${search}`, $options: 'i' },
      monthlyRent: {
        $gte: parseInt(pr.split('-')[0]),
        $lte: parseInt(pr.split('-')[1]),
      },
      rooms: `${ro}BHK`,
      furnishedType: fu,
    })
    .sort({ createdDate: -1 })
    .toArray();

  const count = await collection
    .find({
      locality: { $regex: `${search}`, $options: 'i' },
      monthlyRent: {
        $gte: parseInt(pr.split('-')[0]),
        $lte: parseInt(pr.split('-')[1]),
      },
      rooms: `${ro}BHK`,
      furnishedType: fu,
    })
    .sort({ createdDate: -1 })
    .count();

  console.log(result);
  return {
    props: {
      data: JSON.parse(JSON.stringify(result)),
      search,
      priceRange: [pr.split('-')[0], pr.split('-')[1]],
      ro,
      fu,
      count,
    }, // will be passed to the page component as props
  };
}

export default property;
