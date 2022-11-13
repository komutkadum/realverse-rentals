import Link from 'next/link';
import { formatAmount } from '../../lib/formatAmount';
import { timeAgo } from '../../lib/timeAgo';

function PropertyCard({ propertyData }) {
  return (
    <div className="grid grid-cols-8 font-header duration-200 shadow-md hover:shadow-xl border-gray-300 overflow-hidden border font-para bg-white">
      <div
        className="aspect-w-16  col-span-8 bg-center bg-no-repeat bg-cover md:col-span-4 aspect-h-10 border-r border-b-2 md:border-b-0"
        style={{
          backgroundImage: `url('${propertyData.photos[0]}')`,
        }}
      ></div>
      <form className="col-span-8 md:col-span-4 w-full px-2 md:px-2 grid gap-y-5 md:gap-y-3 py-3 items-center">
        <div className="grid gap-y-1.5">
          <div className="flex justify-between">
            <div>
              <span className="text-xl font-semibold">
                <i className="fa-solid fa-indian-rupee-sign mr-0.5"></i>
                {formatAmount(propertyData.monthlyRent)}
              </span>
              <span className="text-xs group relative  text-gray-500 ml-1 underline underline-offset-4 hover:font-bold cursor-pointer">
                price breakup
                <span className="group-hover:block absolute shadow-2xl hidden bg-gray-100 rounded-lg w-52 top-4 text-black p-4 duration-500 animate__animated animate__fadeIn">
                  <span className="flex justify-between ">
                    <span className="text-gray-500 font-light">
                      Monthly rent :
                    </span>{' '}
                    <span>
                      <i className="fa-solid fa-indian-rupee-sign mr-0.5"></i>
                      {formatAmount(propertyData.monthlyRent)}
                    </span>
                  </span>
                  <br />
                  <span className="flex justify-between">
                    <span className="text-gray-500 font-light">
                      Security deposit :
                    </span>{' '}
                    <span>
                      <i className="fa-solid fa-indian-rupee-sign mr-0.5"></i>
                      {formatAmount(propertyData.securityDeposit)}
                    </span>
                  </span>
                  <br />
                  <span className="flex justify-between">
                    <span className="text-gray-500 font-light">
                      Maintenance charge :
                    </span>
                    <span>
                      <i className="fa-solid fa-indian-rupee-sign mr-0.5"></i>
                      {formatAmount(propertyData.maintenanceCharge)}
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="text-lg text-gray-500">
              <i className="fa-regular mr-2 fa-share-from-square cursor-pointer hover:text-indigo-600 "></i>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            <b className="text-black">
              {propertyData.rooms} {propertyData.propertyType}
            </b>{' '}
            for rent in {propertyData.locality}
          </div>
        </div>

        <div className="grid gap-y-2 bg-gray-100  py-4 rounded-md px-2">
          <div className="flex  justify-between font-bold">
            <span className="text-sm">
              <span className="text-gray-500 font-light text-xs block">
                FURNISHING
              </span>
              {propertyData.furnishedType}&nbsp;
            </span>
            <span className="text-sm">
              <span className="text-gray-500 text-xs font-light block">
                BUILD AREA
              </span>
              {formatAmount(propertyData.area)}&nbsp;
              <span className="text-xs font-light text-gray-400">sq.ft</span>
            </span>
            <span className="text-sm">
              <span className="text-gray-500 text-xs font-light block">
                BATHROOM
              </span>
              {propertyData.bathrooms}
            </span>
          </div>
        </div>
        <div className="overflow-ellipsis overflow-hidden whitespace-nowrap font-normal text-sm font-header text-gray-400">
          {propertyData.propertyDescription}
        </div>
        <div className="gap-x-1 text-gray-500 -mt-4 md:-mt-3 media-scroller">
          {propertyData.amenities.map((item, index) => (
            <p className="badge" key={index}>
              {item.replace(/ /g, '')}
            </p>
          ))}
          {propertyData.societyAmenities.map((item, index) => (
            <p className="badge" key={index}>
              {item.replace(/ /g, '')}
            </p>
          ))}
        </div>
      </form>
      <div className="col-span-8 grid sm:flex w-full gap-y-2 sm:justify-between border-t-2 items-center p-3">
        <div>
          <p className="text-xs text-gray-500">
            Updated {timeAgo(propertyData.createdDate)} by owner
          </p>
          <h3 className="font-bold text-sm sm:text-base">
            {propertyData.postedBy.name}
          </h3>
        </div>
        <div className="flex justify-between gap-x-2 md:gap-x-0">
          <Link
            href={`/showproperty/${propertyData._id}-${propertyData.area}-sqft-${propertyData.rooms}-bhk-${propertyData.propertyType}-on-rent-in-${propertyData.locality}-${propertyData.city}`}
          >
            <button className="primary_button text-sm tracking-wide font-header w-full">
              View Property
            </button>
          </Link>
          <button className="sm:ml-1 primary_button_red duration-200">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
