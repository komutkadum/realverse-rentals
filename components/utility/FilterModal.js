import React, { useEffect } from 'react';
import FilterModalCheckbox from './FilterModalCheckbox';
import FilterModalRadio from './FilterModalRadio';
import ResetModalFilter from './ResetModalFilter';

function FilterModal({
  updateFilterAndSubmit,
  modal,
  setModal,
  leaseTypeFilter,
  bathroomFilter,
  builtUpAreaFilter,
  ageOfPropertyFilter,
  addedFilter,
  availableFilter,
  amenitiesFilter,
  setLeaseTypeFilter,
  setBathroomFilter,
  setBuiltUpAreaFilter,
  setAgeOfPropertyFilter,
  setAddedFilter,
  setAvailableFilter,
  setAmenitiesFilter,
  clearFilter,
}) {
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target == document.getElementById('filterModal')) {
        setModal(false);
      }
    });
    return () => {
      window.removeEventListener('click', () => {});
    };
  }, []);
  return (
    <div
      id="filterModal"
      tabIndex="-1"
      className={`${
        !modal && 'hidden'
      }  z-40 bg-white overflow-y-auto overflow-x-hidden top-0 fixed grid place-items-center inset-0 h-screen w-screen`}
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative grid gap-y-6 py-10 justify-start px-4 md:px-10 bg-white rounded-lg shadow-2xl animate__animated animate__fadeIn ">
          <button
            className="absolute text-lg top-2 cursor-pointer right-4 w-8 text-white rounded-full h-8 bg-red-500 grid place-items-center hover:bg-red-600 active:bg-red-500 duration-200"
            onClick={() => setModal(false)}
          >
            x
          </button>

          <div>
            <label className="font-semibold">Lease Type </label>
            <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
              <FilterModalCheckbox
                id="familyLeaseTypeID"
                value={leaseTypeFilter}
                dbValue="family_preferedTenant"
                setValue={setLeaseTypeFilter}
                text="Family"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalCheckbox
                id="companyLeaseTypeID"
                value={leaseTypeFilter}
                dbValue="company_preferedTenant"
                setValue={setLeaseTypeFilter}
                text="Company"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalCheckbox
                id="bachelorLeaseTypeID"
                value={leaseTypeFilter}
                dbValue="bachelor_preferedTenant"
                setValue={setLeaseTypeFilter}
                text="Bachelor"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
            </div>
          </div>
          <div>
            <label className="font-semibold">Bathrooms </label>
            <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
              <FilterModalRadio
                id="one_plus_bathroom"
                name="bathrooms"
                value={bathroomFilter}
                dbValue="1"
                setValue={setBathroomFilter}
                text="1+"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="two_plus_bathroom"
                name="bathrooms"
                value={bathroomFilter}
                dbValue="2"
                setValue={setBathroomFilter}
                text="2+"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="three_plus_bathroom"
                name="bathrooms"
                value={bathroomFilter}
                dbValue="3"
                setValue={setBathroomFilter}
                text="3+"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="four_plus_bathroom"
                name="bathrooms"
                value={bathroomFilter}
                dbValue="4"
                setValue={setBathroomFilter}
                text="4+"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              {bathroomFilter !== '' && (
                <ResetModalFilter
                  setValue={setBathroomFilter}
                  updateFilterAndSubmit={updateFilterAndSubmit}
                />
              )}
            </div>
          </div>
          {/* <div>
            <label className="font-semibold">
              Built Up Area - {builtUpAreaFilter} Sq.Ft.
            </label>
            <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
              <input
                type="range"
                className="w-full"
                max="5000"
                min="0"
                step="200"
                value={builtUpAreaFilter}
                onChange={(e) => setBuiltUpAreaFilter(e.target.value)}
              />
            </div>
          </div> */}
          <div>
            <label className="font-semibold">Age of Property </label>
            <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
              <FilterModalRadio
                id="Less_than_1_year_Age"
                name="ageOfPropertyName"
                value={ageOfPropertyFilter}
                dbValue="0-1"
                setValue={setAgeOfPropertyFilter}
                text="Less than 1 year"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="Less_than_3_year_Age"
                name="ageOfPropertyName"
                value={ageOfPropertyFilter}
                dbValue="0-3"
                setValue={setAgeOfPropertyFilter}
                text="Less than 3 years"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="Less_than_5_year_Age"
                name="ageOfPropertyName"
                value={ageOfPropertyFilter}
                dbValue="0-5"
                setValue={setAgeOfPropertyFilter}
                text="Less than 5 years"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="Less_than_10_year_Age"
                name="ageOfPropertyName"
                value={ageOfPropertyFilter}
                dbValue="0-10"
                setValue={setAgeOfPropertyFilter}
                text="Less than 10 years"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="more_than_10_year_Age"
                name="ageOfPropertyName"
                value={ageOfPropertyFilter}
                dbValue="10-99"
                setValue={setAgeOfPropertyFilter}
                text="More than 10 years"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              {ageOfPropertyFilter !== '' && (
                <ResetModalFilter
                  setValue={setAgeOfPropertyFilter}
                  updateFilterAndSubmit={updateFilterAndSubmit}
                />
              )}
            </div>
          </div>

          {/* <div>
            <label className="font-semibold">Added </label>
            <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
              <FilterModalRadio
                id="yesterday_Added"
                name="addedName"
                value={addedFilter}
                dbValue="1"
                setValue={setAddedFilter}
                text="Yesterday"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="last_3_days_Added"
                name="addedName"
                value={addedFilter}
                dbValue="3"
                setValue={setAddedFilter}
                text="Last 3 days"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="last_week_Added"
                name="addedName"
                value={addedFilter}
                dbValue="7"
                setValue={setAddedFilter}
                text="Last week"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="last_2_weeks_Added"
                name="addedName"
                value={addedFilter}
                dbValue="14"
                setValue={setAddedFilter}
                text="Last 2 weeks"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="last_month_Added"
                name="addedName"
                value={addedFilter}
                dbValue="30"
                setValue={setAddedFilter}
                text="Last month"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="last_2_months_Added"
                name="addedName"
                value={addedFilter}
                dbValue="60"
                setValue={setAddedFilter}
                text="Last 2 months"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              {addedFilter !== '' && (
                <ResetModalFilter
                  setValue={setAddedFilter}
                  updateFilterAndSubmit={updateFilterAndSubmit}
                />
              )}
            </div>
          </div>
          <div>
            <label className="font-semibold">Available </label>
            <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
              <FilterModalRadio
                id="within_a_week_Available"
                name="availableName"
                value={availableFilter}
                dbValue="7"
                setValue={setAvailableFilter}
                text="Within a week"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="within_15_days_Available"
                name="availableName"
                value={availableFilter}
                dbValue="15"
                setValue={setAvailableFilter}
                text="Within 15 days"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="within_a_month_Available"
                name="availableName"
                value={availableFilter}
                dbValue="30"
                setValue={setAvailableFilter}
                text="Within a month"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalRadio
                id="after_a_month_Available"
                name="availableName"
                value={availableFilter}
                dbValue="30+"
                setValue={setAvailableFilter}
                text="After a month"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              {availableFilter !== '' && (
                <ResetModalFilter
                  setValue={setAvailableFilter}
                  updateFilterAndSubmit={updateFilterAndSubmit}
                />
              )}
            </div>
          </div> */}
          <div>
            <label className="font-semibold">Amenities </label>
            <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
              <FilterModalCheckbox
                id="gatedAmenitiesID"
                value={amenitiesFilter}
                dbValue="Gated Area"
                setValue={setAmenitiesFilter}
                text="Gated Communities"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalCheckbox
                id="listAmenitiesID"
                value={amenitiesFilter}
                dbValue="Lift"
                setValue={setAmenitiesFilter}
                text="Lift"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalCheckbox
                id="poolAmenitiesID"
                value={amenitiesFilter}
                dbValue="Swimming Pool"
                setValue={setAmenitiesFilter}
                text="Swimming Pool"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalCheckbox
                id="gymAmenitiesID"
                value={amenitiesFilter}
                dbValue="Gym"
                setValue={setAmenitiesFilter}
                text="Gym"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
              <FilterModalCheckbox
                id="gasAmenitiesID"
                value={amenitiesFilter}
                dbValue="Gas Pipeline"
                setValue={setAmenitiesFilter}
                text="Gas Pipeline"
                updateFilterAndSubmit={updateFilterAndSubmit}
              />
            </div>
          </div>
          <div className="flex gap-x-2">
            <button
              className="primary_button_without_background bg-gray-500 text-gray-50"
              onClick={clearFilter}
            >
              clear&nbsp;all
            </button>
            <button
              className="primary_button w-full"
              onClick={() => setModal(false)}
            >
              Show results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
