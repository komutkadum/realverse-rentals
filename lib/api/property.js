import { ObjectId } from 'mongodb';
import clientPromise from '../mongodb';

export async function getSingleProperty(propertyId) {
  const client = await clientPromise;
  const collection = client.db(process.env.MONGODB_DB).collection('property');
  const results = await collection.findOne({ _id: ObjectId(propertyId) });
  return {
    ...results,
  };
}
