import React, { useState } from 'react';
import PropertyCard from '../cards/PropertyCard';
import FilterCheckbox from '../utility/FilterCheckbox';
import FilterCheckboxContainer from '../utility/FilterCheckboxContainer';
import FilterModal from '../utility/FilterModal';

function Property({ dataprops, search, priceRange }) {
  const [data, setData] = useState(dataprops);
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="w-full mx-auto ">
        {/* <!-- filters --> */}
        <div className="bg-gray-100 shadow-sm border-b border-gray-400 sticky top-16 z-10">
          <div className="px-4 py-2.5 text-sm max-w-7xl mx-auto font-header">
            <FilterCheckboxContainer text="BHK Type">
              <FilterCheckbox id="oneRKID" text="1RK/BHK" />
              <FilterCheckbox id="twoBHKID" text="2BHK" />
              <FilterCheckbox id="threeBHKID" text="3BHK" />
              <FilterCheckbox id="threePlusBHKID" text="3+BHK" />
            </FilterCheckboxContainer>
            <FilterCheckboxContainer text="Price Range">
              <FilterCheckbox id="fourtenPriceId" text="4k-10k" />
              <FilterCheckbox id="tenfifteenPriceId" text="10k-15k" />
              <FilterCheckbox id="fifteentwentyfivePriceId" text="15k-25k" />
              <FilterCheckbox id="twentyfivethirtyfivePriceId" text="20k-35k" />
            </FilterCheckboxContainer>
            <FilterCheckboxContainer text="Listed By">
              <FilterCheckbox id="ownerListedID" text="Owner" />
              <FilterCheckbox id="dealerListedID" text="Dealer" />
            </FilterCheckboxContainer>
            <FilterCheckboxContainer text="Furnishing">
              <FilterCheckbox id="fullyFurnishingID" text="Fully-Furnished" />
              <FilterCheckbox id="semiFurnishingID" text="Semi-Furnished" />
              <FilterCheckbox id="unFurnishingID" text="Unfurnished" />
            </FilterCheckboxContainer>
            <FilterCheckboxContainer text="Property Type">
              <FilterCheckbox id="villaPropertyTypeID" text="Villa" />
              <FilterCheckbox id="apartmentPropertyTypeID" text="Apartment" />
              <FilterCheckbox
                id="independentPropertyTypeID"
                text="Independent"
              />
            </FilterCheckboxContainer>
            <button
              className="px-3 mr-2 my-1 py-1.5 primary_button_gray"
              onClick={() => setModal(true)}
            >
              More filters <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
        </div>
        {/* <!-- end of filters --> */}
        {/* <!-- left sidebar --> */}
        <div className=" border-gray-400 max-w-7xl mx-auto">
          <div className=" border-gray-300 grid grid-cols-12 gap-y-4  scrollbar-none overflow-y-scroll">
            <div className="col-span-12 md:col-span-8 grid gap-y-4 p-0 md:p-4 overflow-y-scroll scrollbar-none">
              <h1 className="text-lg sm:text-xl px-2 font-semibold font-header pt-4 md:pt-0">
                Apartments in {search}
              </h1>

              {/* <!-- start of the card -->*/}
              {data.map((item) => (
                <PropertyCard key={item._id} propertyData={item} />
              ))}
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
      <FilterModal modal={modal} setModal={setModal} />
      {/* end of modal */}
    </>
  );
}

export default Property;
