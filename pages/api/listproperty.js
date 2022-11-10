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
      // converting string to integer
      body['propertyAge'] = parseInt(body['propertyAge']);
      body['bathrooms'] = parseInt(body['bathrooms']);
      body['balcony'] = parseInt(body['balcony']);
      body['coveredParking'] = parseInt(body['coveredParking']);
      body['openParking'] = parseInt(body['openParking']);
      body['monthlyRent'] = parseFloat(body['monthlyRent']);
      body['maintenanceCharge'] = parseFloat(body['maintenanceCharge']);
      body['securityDeposit'] = parseFloat(body['securityDeposit']);
      body['area'] = parseFloat(body['area']);
      body['carpetArea'] = parseFloat(body['carpetArea']);
      body['flatNumber'] = parseInt(body['flatNumber']);
      body['floorNumber'] = parseInt(body['floorNumber']);
      body['totalFloors'] = parseInt(body['totalFloors']);
      body['lockInPeriod'] = parseInt(body['lockInPeriod']);
      // print body
      const results = await collection.insertOne(body);
      res.status(200).json({ results });
    }
  } catch (err) {
    res.status(500).send({ err, message: 'Data insert failed.' });
  }
});
