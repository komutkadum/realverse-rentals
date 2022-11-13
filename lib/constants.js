export const INITIAL_DATA = {
  // basic details
  propertyType: '',
  propertyAge: '',
  rooms: '',
  bathrooms: '',
  balcony: '',
  furnishedType: '',
  coveredParking: '',
  openParking: '',
  availableForm: '',
  monthlyRent: '',
  maintenanceCharge: '',
  securityDeposit: '',
  area: '',
  carpetArea: '',
  preferedTenantType: [],
  // locationform
  city: '',
  buildingProjectSociety: '',
  locality: '',
  flatNumber: '',
  floorNumber: '',
  totalFloors: '',
  // photos
  photos: [],
  // propertyform
  lockInPeriod: '',
  facing: '',
  address: '',
  servantRoom: '',
  propertyDescription: '',
  // amenities
  amenities: [],
  societyAmenities: [],
};

export const INITIAL_FILTER_DATA = {
  // basic details
  bhkTypeFilter: [],
  priceRangeFilter: [],
  furnishingFilter: [],
  propertyTypeFilter: [],
  leaseTypeFilter: [],
  ageOfPropertyFilter: '',
  addedFilter: '',
  availableFilter: '',
  amenitiesFilter: [],
  builtUpAreaFilter: 0,
  bathroomFilter: '',
};

export const AMENITIES_ICON = {
  'Dining Table': 'dining-table',
  'Washing Machine': 'washing-machine',
  Sofa: 'sofa',
  Microwave: 'microwave',
  Stove: 'gas-stove',
  Fridge: 'fridge',
  'Water Purifier': 'faucet',
  'Gas Pipeline': 'gas-pipeline',
  AC: 'air-conditioner',
  Bed: 'bed',
  Tv: 'tv',
  Cupboard: 'cabinet',
  Geyser: 'water-boiler',
  Lift: 'elevator',
  CCTV: 'cctv',
  Gym: 'weight',
  Garden: 'garden',
  'Kids Area': 'seesaw',
  Sports: 'cricket',
  'Swimming Pool': 'swimming',
  Intercom: 'intercom',
  'Gated Area': 'gate',
  'Club House': 'house',
  'Community Hall': 'city-hall',
  'Regular Water': 'faucet',
  'Power Backup': 'lightbulb',
  'Pet Allowed': 'pet',
};

export const CITY_DATA = [
  {
    id: 0,
    name: 'Mumbai',
  },
  {
    id: 1,
    name: 'Bengaluru',
  },
  {
    id: 2,
    name: 'Hyderabad',
  },
  {
    id: 3,
    name: 'Pune',
  },
  {
    id: 4,
    name: 'Chennai',
  },
  {
    id: 5,
    name: 'Delhi',
  },
  {
    id: 6,
    name: 'Gurgaon',
  },
  {
    id: 7,
    name: 'Noida',
  },
  {
    id: 8,
    name: 'Kolkata',
  },
  {
    id: 10,
    name: 'Ahemdabad',
  },
  {
    id: 11,
    name: 'Navi Mumbai',
  },
];
