import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const collection = client.db(process.env.MONGODB_DB).collection('property');

  const {
    // query: { id, name },
    method,
    body,
  } = req;

  // print body
  console.log(body);

  if (method === 'POST') {
    const results = await collection.insertOne(req.body);
    res.status(200).json({ results });
  }
}
