import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const collection = client.db(process.env.MONGODB_DB).collection('property');

    const { method, body } = req;

    if (method === 'POST') {
      console.log(body.listedByFilter);
      const {
        bhkTypeFilter,
        furnishingFilter,
        priceRangeFilter,
        propertyTypeFilter,
        leaseTypeFilter,
        bathroomFilter,
        amenitiesFilter,
        ageOfPropertyFilter,
        listedByFilter,
        rooms,
        furnishing,
        priceRange,
      } = body;

      // setting the price
      let priceRangeTemp = [];
      for (let i = 0; i < priceRangeFilter.length; i++) {
        let split = priceRangeFilter[i].split('-');
        priceRangeTemp.push(parseInt(split[0]));
        priceRangeTemp.push(parseInt(split[1]));
      }
      // getting the result
      const result = await collection
        .find({
          rooms: {
            $in: bhkTypeFilter.length > 0 ? bhkTypeFilter : [rooms + 'BHK'],
          },
          furnishedType: {
            $in: furnishingFilter.length > 0 ? furnishingFilter : [furnishing],
          },
          monthlyRent: {
            $gte:
              priceRangeFilter.length > 0
                ? Math.min(...priceRangeTemp) * 1000
                : parseInt(priceRange[0]),
            $lte:
              priceRangeFilter.length > 0
                ? Math.max(...priceRangeTemp) * 1000
                : parseInt(priceRange[1]),
          },
          propertyType: {
            $in:
              propertyTypeFilter.length > 0
                ? propertyTypeFilter
                : [
                    'Villa',
                    'Apartment',
                    'Independent House',
                    'Independent Floor',
                  ],
          },
          propertyUploaderType: {
            $in:
              listedByFilter.length > 0
                ? listedByFilter
                : ['Owner', 'Broker', 'Company'],
          },
          bathrooms: {
            $gte: bathroomFilter !== '' ? parseInt(bathroomFilter) : 0,
          },
          preferedTenantType: {
            $in:
              leaseTypeFilter.length > 0
                ? leaseTypeFilter
                : [
                    'family_preferedTenant',
                    'bachelor_preferedTenant',
                    'company_preferedTenant',
                  ],
          },
          societyAmenities: {
            $in:
              amenitiesFilter.length > 0
                ? amenitiesFilter
                : [
                    'Gated Area',
                    'Lift',
                    'Swimming Pool',
                    'Gym',
                    'Gas Pipeline',
                    'Regular Water',
                  ],
          },
          propertyAge: {
            $gte:
              ageOfPropertyFilter !== ''
                ? parseInt(ageOfPropertyFilter.split('-')[0])
                : 0,
            $lte:
              ageOfPropertyFilter !== ''
                ? parseInt(ageOfPropertyFilter.split('-')[1])
                : 99,
          },
        })
        .toArray();

      //counting the result
      const count = await collection
        .find({
          rooms: {
            $in: bhkTypeFilter.length > 0 ? bhkTypeFilter : [rooms + 'BHK'],
          },
          furnishedType: {
            $in: furnishingFilter.length > 0 ? furnishingFilter : [furnishing],
          },
          monthlyRent: {
            $gte:
              priceRangeFilter.length > 0
                ? Math.min(...priceRangeTemp) * 1000
                : parseInt(priceRange[0]),
            $lte:
              priceRangeFilter.length > 0
                ? Math.max(...priceRangeTemp) * 1000
                : parseInt(priceRange[1]),
          },
          propertyType: {
            $in:
              propertyTypeFilter.length > 0
                ? propertyTypeFilter
                : [
                    'Villa',
                    'Apartment',
                    'Independent House',
                    'Independent Floor',
                  ],
          },
          propertyUploaderType: {
            $in:
              listedByFilter.length > 0
                ? listedByFilter
                : ['Owner', 'Broker', 'Company'],
          },
          bathrooms: {
            $gte: bathroomFilter !== '' ? parseInt(bathroomFilter) : 0,
          },
          preferedTenantType: {
            $in:
              leaseTypeFilter.length > 0
                ? leaseTypeFilter
                : [
                    'family_preferedTenant',
                    'bachelor_preferedTenant',
                    'company_preferedTenant',
                  ],
          },
          societyAmenities: {
            $in:
              amenitiesFilter.length > 0
                ? amenitiesFilter
                : [
                    'Gated Area',
                    'Lift',
                    'Swimming Pool',
                    'Gym',
                    'Gas Pipeline',
                    'Regular Water',
                  ],
          },
          propertyAge: {
            $gte:
              ageOfPropertyFilter !== ''
                ? parseInt(ageOfPropertyFilter.split('-')[0])
                : 0,
            $lte:
              ageOfPropertyFilter !== ''
                ? parseInt(ageOfPropertyFilter.split('-')[1])
                : 99,
          },
        })
        .count();
      res
        .status(200)
        .json({ message: 'uploaded successfull!!!', result, count });
    }
  } catch (err) {
    res.status(500).send({ err, message: 'Data insert failed.' });
  }
}
