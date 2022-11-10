import React from 'react';
import { kFormatter } from '../../lib/formatAmount';
import PropertyCard from '../cards/PropertyCard';

function Property({ data, search, priceRange }) {
  return (
    <>
      <div className="w-full mx-auto ">
        {/* <!-- filters --> */}
        <div className="bg-gray-100 shadow-sm border-b border-gray-400 sticky top-16 z-20">
          <div className="px-4 py-2.5 text-sm max-w-7xl mx-auto font-header">
            <button
              id="roomsDropdownDefault"
              data-dropdown-toggle="roomsDropdown"
              className="px-3 mr-2 my-1 py-1.5 primary_button_gray"
            >
              BHK Type <i className="fa-solid fa-angle-down"></i>
            </button>
            <div
              id="roomsDropdown"
              className="hidden z-10 text-center bg-white rounded-md divide-y divide-gray-100 shadow-xl "
            >
              <div className="grid px-6 font-light text-xs gap-y-5 py-4 text-gray-600 font-header">
                <span>
                  <input
                    type="checkbox"
                    id="oneRKPropertyID"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="oneRKPropertyID"
                    className="py-1.5 px-2.5 rounded-full  border border-gray-300  cursor-pointer hover:bg-gray-100 peer-checked:bg-indigo-600 peer-checked:text-white"
                  >
                    1 RK
                  </label>
                </span>
              </div>
            </div>
            <button className="px-3 mr-2 my-1 py-1.5 primary_button_gray ">
              {kFormatter(priceRange[0])} - {kFormatter(priceRange[1])}{' '}
              <i className="fa-solid fa-angle-down"></i>
            </button>
            <select className="my-1 mr-2 py-1 w-32 primary_button_gray">
              <option>Listed By</option>
              <option>hello</option>
              <option>hello</option>
              <option>hello</option>
            </select>
            <button className="px-3 mr-2 my-1 py-1.5 primary_button_gray">
              Listed By <i className="fa-solid fa-angle-down"></i>
            </button>
            <button className="px-3 mr-2 my-1 py-1.5 primary_button_gray">
              Furnishing <i className="fa-solid fa-angle-down"></i>
            </button>
            <button className="px-3 mr-2 my-1 py-1.5 primary_button_gray">
              Property Type <i className="fa-solid fa-angle-down"></i>
            </button>
            <button className="px-3 mr-2 my-1 py-1.5 primary_button_gray">
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
    </>
  );
}

export default Property;
