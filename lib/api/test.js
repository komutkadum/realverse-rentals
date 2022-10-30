import clientPromise from '../mongodb';



export async function getList() {
  const client = await clientPromise;
  const collection = client.db('sample_analytics').collection('accounts');
  const results = await collection.find().limit(10).toArray();
  return {
    ...results,
  };
}
