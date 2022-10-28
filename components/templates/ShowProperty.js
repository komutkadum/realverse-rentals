function ShowProperty() {
  return (
    <>
      <main className="max-w-5xl mx-auto my-7 grid gap-y-4">
        <section className="sm:px-2 lg:px-0 justify-between items-center hidden sm:flex">
          <div className="grid gap-y-1 text-left">
            <h1 className="text-2xl font-header flex font-semibold">
              3 BHK apartment for rent
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
              Semi-furnished | 1722sq ft
            </p>
            <p className="font-light text-sm font-para text-gray-500">
              Prestige Dolce Vita, Prithvi Layout, Whitefield, Bangalore
            </p>
            <button className="bg-green-500 text-white rounded-md w-20 text-sm py-0.5">
              <i className="fa-regular fa-circle-check"></i> Verified
            </button>
          </div>
          <div className="text-right grid gap-y-1">
            <h1 className="text-2xl font-header font-semibold">
              <i className="fa-solid fa-indian-rupee-sign"></i> 60,000
            </h1>
            <p className="font-light text-sm font-para text-gray-500">
              Added 25 days ago
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">
              Contact seller
            </button>
          </div>
        </section>
        <section className="">
          <div className="grid grid-rows-4 grid-flow-col gap-2">
            <div
              className="row-span-4 col-span-2 relative aspect-w-16 aspect-h-9 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/owner.jpg')" }}
            >
              <button className="bg-green-500 absolute text-white rounded-md w-20 right-1 sm:hidden h-7 text-sm py-0.5">
                <i className="fa-regular fa-circle-check"></i> Verified
              </button>
            </div>
            <div
              className="row-span-2 col-span-1 hidden md:block bg-cover bg-center"
              style={{ backgroundImage: "url('/images/renter.jpg')" }}
            ></div>
            <div
              className="row-span-2 col-span-1 hidden md:block bg-cover bg-center"
              style={{ backgroundImage: "url('/images/everyone.jpg')" }}
            ></div>
          </div>
          {/* mobile view */}
          <div className="grid gap-y-1 bg-white p-5 sm:hidden">
            <h1 className="  font-header flex font-semibold">
              3 BHK apartment for rent
            </h1>
            <p>
              <i className="fa-solid fa-indian-rupee-sign"></i> 60,000
            </p>
            <p className="font-light text-xs font-para text-gray-500">
              Prestige Dolce Vita, Prithvi Layout, Whitefield, Bangalore
            </p>
            <p className="font-light text-xs font-para ">
              Semi-furnished | 1722sq ft
            </p>
            <button className="bg-green-600 text-white mt-2 py-1 ">
              Contact Seller
            </button>
          </div>
        </section>
        <section className="grid grid-cols-12 gap-x-3 gap-y-6 mb-8 sm:mb-20">
          <div className="grid grid-cols-12 col-span-12 md:col-span-8 gap-y-2 sm:gap-y-4">
            <div className="grid grid-cols-12 col-span-12">
              <div className="col-span-12 text-xl px-5 bg-white border-b-2 font-semibold font-header py-4">
                Overview
              </div>
              <div className="col-span-12 py-8 px-5 text-sm bg-white grid  font-para gap-y-8">
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Project Name
                  </h1>
                  <p className="font-medium">Prestige Dolce Vita</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Security
                  </h1>
                  <p className="font-medium">3.6 Lacs</p>
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
                  <p className="font-medium">1722 sq.ft</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Furnishing
                  </h1>
                  <p className="font-medium">Semi Furnished</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Bathrooms
                  </h1>
                  <p className="font-medium">3</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Available from
                  </h1>
                  <p className="font-medium">Available now</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Floor number
                  </h1>
                  <p className="font-medium">Middle of 10 floors</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Lease type
                  </h1>
                  <p className="font-medium">Family / Bachelor</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Age of property
                  </h1>
                  <p className="font-medium">4 years</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Security
                  </h1>
                  <p className="font-medium">3.6 Lacs</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Parking
                  </h1>
                  <p className="font-medium">1 Covered Parking</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Main entrance facing
                  </h1>
                  <p className="font-medium">North-East</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Gas Pipeline
                  </h1>
                  <p className="font-medium">Yes</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Gate Community
                  </h1>
                  <p className="font-medium">Yes</p>
                </span>
                <span>
                  <h1 className="font-weight-semibold text-gray-500">
                    Carpet area
                  </h1>
                  <p className="font-medium">1400 sq.ft</p>
                </span>
                <span className="col-span-2">
                  <h1 className="font-extrabold">About this property</h1>
                  <p className=" py-3 text-gray-500 text-sm font-medium">
                    Our Service Fees is only Rs 20,000 + GST for an apartment in
                    Bangalore We also provide Professional Property Management.
                    We have multiple options available all across City. Contact
                    now 3bhk available on rent at prestige Dolce vita Whitefield
                    Bangalore
                  </p>
                </span>
              </div>
            </div>
            {/* furnishing */}
            <div className="px-5 bg-white col-span-12">
              <div className=" text-xl border-b-2 font-semibold font-header py-4">
                Furnishing
              </div>
              <div className="py-4 flex flex-wrap gap-y-6">
                <div className="w-24 grid place-items-center">
                  <img src="/icons/bed.png" />
                  <h1 className="text-xs">Gas Pipeline</h1>
                </div>
                <div className="w-24 grid place-items-center">
                  <img src="/icons/bed.png" />
                  <h1 className="text-xs">Gas Pipeline</h1>
                </div>
                <div className="w-24 grid place-items-center">
                  <img src="/icons/bed.png" />
                  <h1 className="text-xs">Gas Pipeline</h1>
                </div>
                <div className="w-24 grid place-items-center">
                  <img src="/icons/bed.png" />
                  <h1 className="text-xs">Gas Pipeline</h1>
                </div>
              </div>
            </div>
            {/* Amenities */}
            <div className="px-5 bg-white col-span-12">
              <div className=" text-xl border-b-2 font-semibold font-header py-4">
                Amenities
              </div>
              <div className="py-4 flex flex-wrap gap-y-6">
                <div className="w-24 grid place-items-center">
                  <img src="/icons/bed.png" />
                  <h1 className="text-xs">Gas Pipeline</h1>
                </div>
              </div>
            </div>
            {/* map */}
            <div className="p-5 bg-white col-span-12">
              <div className="max-w-7xl">
                <div className="gmap_canvas1  aspect-w-16 aspect-h-9" id="gmap">
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

          <div className="col-span-12 md:col-span-4 bg-slate-200 px-4 pt-4 pb-4 md:pb-0">
            <div className="sm:sticky sm:top-20 grid gap-y-4">
              <h1 className="py-3 px-4 rounded bg-yellow-100 border border-yellow-500 text-xs text-center">
                Great choice! Nice neighborhood around
              </h1>
              <div className="grid px-4 gap-y-4 rounded bg-white py-4 ">
                <h1 className="text-lg font-semibold">Contact Seller</h1>
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
              <div className="flex text-xs border border-gray-300 font-semibold font-para tracking-wide text-gray-500">
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
