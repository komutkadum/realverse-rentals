/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { AMENITIES_ICON } from '../../lib/constants';
import { formatAmount } from '../../lib/formatAmount';
import { timeAgo } from '../../lib/timeAgo';
import CustomCarousel from '../utility/CustomCarousel';

/* eslint-disable @next/next/no-img-element */
function ShowProperty({ data }) {
  const [photoModal, setPhotoModal] = useState(false);
  return (
    <>
      {photoModal && (
        <CustomCarousel photos={data.photos} setPhotoModal={setPhotoModal} />
      )}
      <main className="max-w-5xl mx-auto my-7 grid gap-y-4">
        <section className="sm:px-2 lg:px-0 justify-between items-center hidden sm:flex">
          <div className="grid gap-y-1 text-left">
            <h1 className="text-2xl font-header flex font-semibold">
              {data.rooms.match(/(\d+)/)[0]} BHK apartment for rent
              <span className="ml-16 flex gap-x-2">
                <span>
                  <i className="fa-regular fa-share-from-square"></i>
                </span>
                <span>
                  <i className="fa-regular fa-heart"></i>
                </span>
              </span>
            </h1>
            <p className="font-light text-sm font-para text-gray-500">
              {data.furnishedType} | {formatAmount(data.area)} sq ft
            </p>
            <p className="font-light text-sm font-para text-gray-500">
              {data.buildingProjectSociety}, {data.locality}, {data.city}
            </p>
            <button className="bg-green-500 text-white rounded-md w-20 text-sm py-0.5">
              <i className="fa-regular fa-circle-check"></i> Verified
            </button>
          </div>
          <div className="text-right grid gap-y-1">
            <h1 className="text-2xl font-header font-semibold">
              <i className="fa-solid fa-indian-rupee-sign"></i>{' '}
              {formatAmount(data.monthlyRent)}
            </h1>
            <p className="font-light text-sm font-para text-gray-500">
              Added {timeAgo(data.createdDate)}
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">
              Contact seller
            </button>
          </div>
        </section>
        <section className="">
          <div
            onClick={() => setPhotoModal(true)}
            className="grid grid-rows-4 cursor-pointer grid-flow-col gap-2 p-2 bg-white shadow-lg"
          >
            <div
              className="row-span-4 col-span-2 relative aspect-w-16 aspect-h-9 bg-cover bg-no-repeat bg-white bg-center"
              style={{ backgroundImage: `url('${data.photos[0]}')` }}
            >
              <button className="bg-green-500 absolute text-white rounded-md w-20 right-1 sm:hidden h-7 text-sm py-0.5">
                <i className="fa-regular fa-circle-check"></i> Verified
              </button>
              <div className="absolute md:hidden text-center text-lg w-full grid place-items-center h-full  opacity-90">
                <div className="bg-white px-2 py-1 shadow-2xl">
                  Tap to see all images
                </div>
              </div>
            </div>
            <div
              className="row-span-2 col-span-1 aspect-w-16 aspect-h-9 hidden md:block bg-contain bg-no-repeat bg-white bg-center"
              style={{ backgroundImage: `url('${data.photos[1]}')` }}
            ></div>
            <div
              className="row-span-2 relative col-span-1 aspect-w-16 aspect-h-9 hidden md:block bg-contain bg-no-repeat bg-white bg-center"
              style={{ backgroundImage: `url('${data.photos[2]}')` }}
            >
              <div className="absolute text-center text-lg w-full grid place-items-center text-white h-full bg-black opacity-90">
                <p>
                  <i className="fa-solid fa-plus"></i>
                  <br />
                  See more photos
                </p>
              </div>
            </div>
          </div>
          {/* mobile view */}
          <div className="grid gap-y-1 bg-white p-5 sm:hidden">
            <h1 className="  font-header flex font-semibold">
              {data.rooms.match(/(\d+)/)[0]} BHK apartment for rent
            </h1>
            <p>
              <i className="fa-solid fa-indian-rupee-sign"></i>{' '}
              {data.monthlyRent}
            </p>
            <p className="font-light text-xs font-para text-gray-500">
              {data.buildingProjectSociety}, {data.locality}, {data.city}
            </p>
            <p className="font-light text-xs font-para ">
              {data.furnishedType} | {data.area} sq ft
            </p>
            <button className="bg-green-600 text-white mt-2 py-1 ">
              Contact Seller
            </button>
          </div>
        </section>
        <section className="grid grid-cols-12 gap-x-3 gap-y-6 mb-8 sm:mb-20">
          <div className="grid grid-cols-12 col-span-12 md:col-span-8 gap-y-4">
            <div className="grid grid-cols-12 col-span-12 shadow-lg">
              <div className="col-span-12 text-xl px-5 bg-white border-b-2 font-semibold font-header py-4">
                Overview
              </div>
              <div className="col-span-12 py-8 px-5 text-sm bg-white grid  font-para gap-y-8">
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Project Name
                  </h1>
                  <p className="font-medium">{data.buildingProjectSociety}</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Security
                  </h1>
                  <p className="font-medium">
                    <i className="fa-solid fa-indian-rupee-sign mr-0.5"></i>
                    {formatAmount(data.securityDeposit)}
                  </p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Brokerage
                  </h1>
                  <p className="font-medium">No Charge</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Build up area
                  </h1>
                  <p className="font-medium">{formatAmount(data.area)} sq.ft</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Carpet area
                  </h1>
                  <p className="font-medium">
                    {formatAmount(data.carpetArea)} sq.ft
                  </p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Furnishing
                  </h1>
                  <p className="font-medium">{data.furnishedType}</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Bathrooms
                  </h1>
                  <p className="font-medium">{data.bathrooms}</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Balcony
                  </h1>
                  <p className="font-medium">{data.balcony}</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Available from
                  </h1>
                  <p className="font-medium">{data.availableForm}</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Lockin period
                  </h1>
                  <p className="font-medium">{data.lockInPeriod} months</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold relative text-gray-500">
                    Floor number{' '}
                    <span>
                      <i className="fa-solid cursor-pointer peer fa-circle-info"></i>{' '}
                      <span className="hidden absolute top-6  left-16 peer-hover:inline-flex bg-slate-700 text-white p-2">
                        totalFloors - {data.totalFloors}
                        <br />
                        flat No- {data.flatNumber}
                      </span>
                    </span>
                  </h1>
                  <p className="font-medium">{data.floorNumber}</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Lease type
                  </h1>
                  <p className="font-medium">
                    {data.preferedTenantType
                      .map((item) => item.split('_')[0])
                      .join(' / ')}
                  </p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Servant Room
                  </h1>
                  <p className="font-medium">{data.servantRoom}</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Age of property
                  </h1>
                  <p className="font-medium">{data.propertyAge} years</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Open Parking
                  </h1>
                  <p className="font-medium">{data.openParking}</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Covered Parking
                  </h1>
                  <p className="font-medium">{data.coveredParking}</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Main entrance facing
                  </h1>
                  <p className="font-medium">{data.facing}</p>
                </span>

                <span className="col-span-2">
                  <h1 className="font-extrabold">About this property</h1>
                  <p className=" py-3 text-gray-500 text-sm font-medium">
                    {data.propertyDescription}
                  </p>
                </span>
              </div>
            </div>
            {/* furnishing */}
            <div className="px-5 bg-white col-span-12 shadow-lg">
              <div className=" text-xl border-b-2 font-semibold font-header py-4">
                Furnishing
              </div>
              <div className="py-4 flex flex-wrap gap-y-6">
                {data.amenities.map((item) => (
                  <div
                    className="w-24 grid place-items-center gap-y-2"
                    key={item}
                  >
                    <img src={`/icons/${AMENITIES_ICON[item]}.png`} />
                    <h1 className="text-xs">{item}</h1>
                  </div>
                ))}
              </div>
            </div>
            {/* Amenities */}
            <div className="px-5 bg-white col-span-12 shadow-lg">
              <div className=" text-xl border-b-2 font-semibold font-header py-4">
                Amenities
              </div>
              <div className="py-4 flex flex-wrap gap-y-6">
                {data.societyAmenities.map((item) => (
                  <div
                    className="w-24 grid place-items-center gap-y-2"
                    key={item}
                  >
                    <img src={`/icons/${AMENITIES_ICON[item]}.png`} />
                    <h1 className="text-xs">{item}</h1>
                  </div>
                ))}
              </div>
            </div>
            {/* map */}
            <div className="p-2 md:p-5 bg-white col-span-12 shadow-lg">
              <div className="max-w-7xl">
                <div
                  className="gmap_canvas1  border border-slate-400 aspect-w-16 aspect-h-9"
                  id="gmap"
                >
                  <iframe
                    id="gmap_canvas1"
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-slate-300 px-4 pt-4 pb-4 md:pb-0 ">
            <div className="sm:sticky sm:top-24 grid gap-y-4 ">
              <h1 className="py-3 px-4 rounded bg-yellow-100 border  border-yellow-500 text-xs text-center">
                Great choice! Nice neighborhood around
              </h1>
              <div className="grid px-4 gap-y-4 rounded bg-white py-4 ">
                <h1 className="text-lg font-semibold">Contact Seller</h1>

                <div className="w-full mx-auto tracking-wide flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      className="h-10 w-10"
                      src={`${
                        data.postedBy.picture
                          ? data.postedBy.picture
                          : '/icons/user.png'
                      }`}
                      alt="ChitChat Logo"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black">
                      {data.postedBy.name}
                    </div>
                    <p className="text-xs text-gray-500">Owner</p>
                    <div className="text-black flex font-semibold text-xs">
                      <p className="text-gray-500">email</p>:{' '}
                      {data.postedBy.email.slice(0, 7)}...
                    </div>
                  </div>
                </div>
                <p className="text-sm font-semibold">
                  please share your contact
                </p>
                <input type="text" placeholder="name" className="form" />
                <input type="text" placeholder="phone" className="form" />
              </div>
              <div className="text-xs text-black tracking-wide font-semibold font-para">
                <input
                  type="checkbox"
                  id="showProperty_contact"
                  className="mr-1"
                />
                <label htmlFor="showProperty_contact">
                  I agree to be contacted by realverse and other agents via
                  WhatsApp, SMS, phone, email.
                </label>
              </div>
              <button className="primary_button_without_background text-white bg-gray-500 hover:bg-gray-600">
                Get Contact Details
              </button>
              <div className="py-3 px-4  rounded bg-slate-100 border text-xs ">
                <h1 className="font-semibold text-sm">Still deciding?</h1>
                <div className="grid grid-flow-col items-start grid-cols-12">
                  <p className="col-span-10">
                    Shortlist this property for now & easily come back to it
                    later.
                  </p>
                  <span className="col-span-2 -mt-5">
                    <button className="w-8 rounded-full transition-colors duration-300 ease-in-out active:bg-red-800 text-red-600  hover:bg-red-600 hover:border-transparent cursor-pointer hover:text-white h-8 p-6 flex justify-center items-center border border-red-400">
                      <i className="fa-regular fa-heart text-2xl  "></i>
                    </button>
                  </span>
                </div>
              </div>
              <div className="flex text-xs border sm:mb-4 border-gray-300 font-semibold font-para tracking-wide text-gray-500">
                <button className="py-4 bg-white w-full border-r hover:bg-gray-100">
                  <i className="fa-regular fa-share-from-square"></i> Share
                </button>
                <button className="py-4 bg-white w-full hover:bg-gray-100">
                  <i className="fa-regular fa-flag"></i> Report
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ShowProperty;
