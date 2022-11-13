import axios from 'axios';
import React, { useState } from 'react';
import { useSetState } from '../../hooks/useSetState';
import PropertyCard from '../cards/PropertyCard';
import FilterCheckbox from '../utility/FilterCheckbox';
import FilterCheckboxContainer from '../utility/FilterCheckboxContainer';
import FilterModal from '../utility/FilterModal';
import PropertySkeleton from '../utility/PropertySkeleton';

function Property({
  dataprops,
  search,
  priceRange,
  rooms,
  furnishing,
  totalProperty,
}) {
  const [data, setData] = useState(dataprops);
  const [totalData, setTotalData] = useState(totalProperty);
  const [modal, setModal] = useState(false);
  // loading state
  const [loading, setLoading] = useState(false);
  // filter data
  const [bhkTypeFilter, setBhkTypeFilter, getBhkTypeFilter] = useSetState([]);
  const [priceRangeFilter, setPriceRangeFilter, getPriceRangeFilter] =
    useSetState([]);
  const [listedByFilter, setListByFilter, getListByFilter] = useSetState([]);
  const [furnishingFilter, setFurnishingFilter, getFurnishingFilter] =
    useSetState([]);
  const [propertyTypeFilter, setPropertyTypeFilter, getPropertyTypeFilter] =
    useSetState([]);
  const [leaseTypeFilter, setLeaseTypeFilter, getLeaseTypeFilter] = useSetState(
    []
  );
  const [ageOfPropertyFilter, setAgeOfPropertyFilter, getAgeOfPropertyFilter] =
    useSetState('');
  const [addedFilter, setAddedFilter, getAddedFilter] = useSetState('');
  const [availableFilter, setAvailableFilter, getAvailableFilter] =
    useSetState('');
  const [amenitiesFilter, setAmenitiesFilter, getAmenitiesFilter] = useSetState(
    []
  );
  const [builtUpAreaFilter, setBuiltUpAreaFilter, getBuiltUpAreaFilter] =
    useSetState(0);
  const [bathroomFilter, setBathroomFilter, getBathroomFilter] =
    useSetState('');

  const updateFilterAndSubmit = async () => {
    try {
      let axiosBodyData = {
        bhkTypeFilter: await getBhkTypeFilter(),
        priceRangeFilter: await getPriceRangeFilter(),
        furnishingFilter: await getFurnishingFilter(),
        propertyTypeFilter: await getPropertyTypeFilter(),
        leaseTypeFilter: await getLeaseTypeFilter(),
        ageOfPropertyFilter: await getAgeOfPropertyFilter(),
        addedFilter: await getAddedFilter(),
        availableFilter: await getAvailableFilter(),
        amenitiesFilter: await getAmenitiesFilter(),
        builtUpAreaFilter: await getBuiltUpAreaFilter(),
        bathroomFilter: await getBathroomFilter(),
        rooms,
        furnishing,
        priceRange,
      };
      setLoading(true);
      console.log(axiosBodyData);
      let res = await axios.post('/api/property', axiosBodyData);
      console.log(res.data);
      setData(res.data.result);
      setTotalData(res.data.count);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const clearFilter = () => {
    setBhkTypeFilter([]);
    setPriceRangeFilter([]);
    setFurnishingFilter([]);
    setPropertyTypeFilter([]);
    setLeaseTypeFilter([]);
    setAmenitiesFilter([]);
    setBathroomFilter('');
    setAgeOfPropertyFilter('');
    setAddedFilter('');
    setAvailableFilter('');
    setBuiltUpAreaFilter(0);
    updateFilterAndSubmit();
  };

  return (
    <>
      <div className="w-full mx-auto ">
        {/* <!-- filters --> */}
        <div className="bg-gray-100 shadow-sm border-b border-gray-400 sticky top-16 z-10">
          <div className="px-4 py-2.5 text-sm max-w-7xl mx-auto font-header">
            <FilterCheckboxContainer
              text="BHK Type"
              edited={bhkTypeFilter.length > 0}
            >
              <FilterCheckbox
                id="oneRKID"
                text="1RK"
                value={bhkTypeFilter}
                dbValue="1RK"
                setValue={setBhkTypeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterCheckbox
                id="oneBHKID"
                text="1BHK"
                value={bhkTypeFilter}
                dbValue="1BHK"
                setValue={setBhkTypeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterCheckbox
                id="twoBHKID"
                text="2BHK"
                value={bhkTypeFilter}
                dbValue="2BHK"
                setValue={setBhkTypeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterCheckbox
                id="threeBHKID"
                text="3BHK"
                value={bhkTypeFilter}
                dbValue="3BHK"
                setValue={setBhkTypeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterCheckbox
                id="threePlusBHKID"
                text="3+BHK"
                value={bhkTypeFilter}
                dbValue="3+BHK"
                setValue={setBhkTypeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
            </FilterCheckboxContainer>
            <FilterCheckboxContainer
              text="Price Range"
              edited={priceRangeFilter.length > 0}
            >
              <FilterCheckbox
                id="fourtenPriceId"
                text="4k-10k"
                value={priceRangeFilter}
                dbValue="4-10"
                setValue={setPriceRangeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterCheckbox
                id="tenfifteenPriceId"
                text="10k-15k"
                value={priceRangeFilter}
                dbValue="10-15"
                setValue={setPriceRangeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterCheckbox
                id="fifteentwentyfivePriceId"
                text="15k-25k"
                value={priceRangeFilter}
                dbValue="15-25"
                setValue={setPriceRangeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterCheckbox
                id="twentyfivethirtyfivePriceId"
                text="20k-35k"
                value={priceRangeFilter}
                dbValue="20-35"
                setValue={setPriceRangeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
            </FilterCheckboxContainer>
            {/* <FilterCheckboxContainer text="Listed By">
              <FilterCheckbox
                id="ownerListedID"
                text="Owner"
                value={listedByFilter}
                dbValue="Owner"
                setValue={setListByFilter}
                onChangeInputUsingFilter={onChangeInputUsingFilter}
              />
              <FilterCheckbox
                id="dealerListedID"
                text="Dealer"
                value={listedByFilter}
                dbValue="Dealer"
                setValue={setListByFilter}
                onChangeInputUsingFilter={onChangeInputUsingFilter}
              />
            </FilterCheckboxContainer> */}
            <FilterCheckboxContainer
              text="Furnishing"
              edited={furnishingFilter.length > 0}
            >
              <FilterCheckbox
                id="fullyFurnishingID"
                text="Fully-Furnished"
                value={furnishingFilter}
                dbValue="Fully-Furnished"
                setValue={setFurnishingFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterCheckbox
                id="semiFurnishingID"
                text="Semi-Furnished"
                value={furnishingFilter}
                dbValue="Semi-Furnished"
                setValue={setFurnishingFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterCheckbox
                id="unFurnishingID"
                text="Unfurnished"
                value={furnishingFilter}
                dbValue="Unfurnished"
                setValue={setFurnishingFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
            </FilterCheckboxContainer>
            <FilterCheckboxContainer
              text="Property Type"
              edited={propertyTypeFilter.length > 0}
            >
              <FilterCheckbox
                id="villaPropertyTypeID"
                text="Villa"
                value={propertyTypeFilter}
                dbValue="Villa"
                setValue={setPropertyTypeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterCheckbox
                id="apartmentPropertyTypeID"
                text="Apartment"
                value={propertyTypeFilter}
                dbValue="Apartment"
                setValue={setPropertyTypeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterCheckbox
                id="independentPropertyTypeID"
                text="Independent House"
                value={propertyTypeFilter}
                dbValue="Independent House"
                setValue={setPropertyTypeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterCheckbox
                id="independentFloorTypeID"
                text="Independent Floor"
                value={propertyTypeFilter}
                dbValue="Independent Floor"
                setValue={setPropertyTypeFilter}
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
            </FilterCheckboxContainer>
            <button
              className="px-3 mr-2 my-1 py-1.5 relative primary_button_gray"
              onClick={() => setModal(true)}
            >
              {(leaseTypeFilter.length > 0 ||
                bathroomFilter.length > 0 ||
                builtUpAreaFilter > 0 ||
                ageOfPropertyFilter !== '' ||
                addedFilter !== '' ||
                availableFilter !== '' ||
                amenitiesFilter.length > 0) && (
                <i
                  className="fa-solid fa-circle absolute left-0.5 text-indigo-600 "
                  style={{ fontSize: '7px' }}
                ></i>
              )}
              More filters <i className="fa-solid fa-angle-down"></i>
            </button>

            {(leaseTypeFilter.length > 0 ||
              bathroomFilter.length > 0 ||
              builtUpAreaFilter > 0 ||
              ageOfPropertyFilter !== '' ||
              addedFilter !== '' ||
              availableFilter !== '' ||
              amenitiesFilter.length > 0 ||
              bhkTypeFilter.length > 0 ||
              priceRangeFilter.length > 0 ||
              furnishingFilter.length > 0 ||
              propertyTypeFilter.length > 0) && (
              <button
                className="px-3 mr-2 my-1 py-1.5 text-indigo-600 hover:text-indigo-900 underline underline-offset-2"
                onClick={clearFilter}
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
        {/* <!-- end of filters --> */}
        {/* <!-- left sidebar --> */}
        <div className=" border-gray-400 max-w-7xl mx-auto">
          <div className=" border-gray-300 grid grid-cols-12 gap-y-4  scrollbar-none overflow-y-scroll">
            <div className="col-span-12 md:col-span-8 grid gap-y-4 p-0 md:p-4 overflow-y-scroll scrollbar-none">
              <h1 className="text-lg sm:text-xl px-2  font-semibold font-header pt-4 md:pt-0">
                <span className=" font-light text-gray-500 text-sm">
                  Showing 1 - {totalData} properties
                </span>
                <span className="flex justify-between items-center">
                  <span>Apartments in {search}</span>
                  <span className="flex items-center text-gray-500 gap-x-1 text-sm font-light">
                    Sort&nbsp;by:
                    <select className="form py-0">
                      <option>Most relevant</option>
                      <option>Newest first</option>
                      <option>Price: low to high</option>
                      <option>Price: high to low</option>
                    </select>
                  </span>
                </span>
              </h1>

              {/* <!-- start of the card -->*/}
              {loading ? (
                <>
                  <PropertySkeleton />
                  <PropertySkeleton />
                  <PropertySkeleton />
                </>
              ) : data.length > 0 ? (
                data.map((item) => (
                  <PropertyCard key={item._id} propertyData={item} />
                ))
              ) : (
                <div>No Listing</div>
              )}
              {/* <!-- end of the card --> */}
            </div>
            <div className="col-span-12 md:col-span-4  gap-y-4 p-0 md:p-4">
              <div className="bg-white h-auto sticky grid">
                <h1 className="py-3 px-4 rounded  bg-yellow-100 border  border-yellow-500 text-xs text-center">
                  Great choice! Nice neighborhood around
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <FilterModal
        modal={modal}
        setModal={setModal}
        leaseTypeFilter={leaseTypeFilter}
        bathroomFilter={bathroomFilter}
        builtUpAreaFilter={builtUpAreaFilter}
        ageOfPropertyFilter={ageOfPropertyFilter}
        addedFilter={addedFilter}
        availableFilter={availableFilter}
        amenitiesFilter={amenitiesFilter}
        setLeaseTypeFilter={setLeaseTypeFilter}
        setBathroomFilter={setBathroomFilter}
        setBuiltUpAreaFilter={setBuiltUpAreaFilter}
        setAgeOfPropertyFilter={setAgeOfPropertyFilter}
        setAddedFilter={setAddedFilter}
        setAvailableFilter={setAvailableFilter}
        setAmenitiesFilter={setAmenitiesFilter}
        updateFilterAndSubmit={updateFilterAndSubmit}
        clearFilter={clearFilter}
      />
      {/* end of modal */}
    </>
  );
}

export default Property;
