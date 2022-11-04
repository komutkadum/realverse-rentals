import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import clientPromise from '../../lib/mongodb';

export default withApiAuthRequired(async function handler(req, res) {
  try {
    const client = await clientPromise;
    const collection = client.db(process.env.MONGODB_DB).collection('property');

    const {
      // query: { id, name },
      method,
      body,
    } = req;

    if (method === 'POST') {
      body['createdDate'] = Date.now();
      body['editedDate'] = 'no';
      // print body
      console.log(body);
      const results = await collection.insertOne(body);
      res.status(200).json({ results });
    }
  } catch (err) {
    res.status(500).send({ err, message: 'Data insert failed.' });
  }
});
