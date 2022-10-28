function HomePage() {
  return (
    <>
      <div
        className="max-w-full mb-16 py-44 sm:py-64 bg-cover flex justify-center bg-no-repeat relative bg-center"
        style={{
          backgroundImage: 'url("/images/kitchen-g0bb9e248f_1920.jpg")',
        }}
      >
        <h1 className="text-2xl text-center absolute top-20 sm:top-40 sm:text-5xl md:text-6xl bg-white p-4 text-gray-700 font-header font-extrabold tracking-wider">
          Get Your Dream Home
        </h1>
        <div className="max-w-7xl px-4 py-5 mx-3 sm:p-8 rounded-md bg-white absolute -bottom-32 sm:-bottom-28 lg:-bottom-16">
          <form
            className="grid grid-cols-12 gap-2 sm:gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Location*"
                className="block w-full rounded-md border-gray-300 shadow-sm py-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-2">
              <select
                id="country"
                name="country"
                className=" block w-full rounded-md border border-gray-300 py-4 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option className="text-gray-500">Price Range*</option>
                <option>Between 4k-10k</option>
                <option>Between 10k-15k</option>
                <option>Between 15k-25k</option>
                <option>Between 25k-35k</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <select
                id="country"
                name="country"
                className=" block w-full rounded-md border border-gray-300 py-4 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Bedrooms*</option>
                <option>+1 Rk/1 Bhk</option>
                <option>+2 BHK</option>
                <option>+3 BHK</option>
                <option>+4 BHK</option>
                <option>+5 BHK</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <select
                id="country"
                name="country"
                className=" block w-full rounded-md border border-gray-300 py-4 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Furnishing*</option>
                <option>Furnished</option>
                <option>Semi-furnished</option>
                <option>Unfurnished</option>
              </select>
            </div>
            <div className="col-span-12 sm:col-span-12 lg:col-span-2">
              <button
                type="submit"
                className="rounded-md block w-full border border-transparent bg-indigo-600 py-4 px-6 sm:text-sm font-para text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                &nbsp;&nbsp;Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl text-center mx-auto py-24 font-header text-gray-700 font-bold">
        <h1 className="text-center text-2xl">Trusted By</h1>
        <div className="mt-10 md:flex text-4xl justify-evenly font-extrabold">
          <div>Realverse</div>
          <div>Android</div>
          <div>React</div>
          <div>Algolia</div>
          <div>Google</div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900 font-header">
              Recommended Properties for Renting
            </h2>

            <div className="mt-6 space-y-12 md:grid md:grid-cols-2 font-para md:gap-x-4 md:space-y-0 lg:grid-cols-3 lg:gap-x-6">
              <div className="relative rounded-lg border hover:shadow-xl transition duration-300">
                <div className="relative h-80 w-full rounded-lg overflow-hidden bg-white ">
                  <span className="absolute cursor-pointer shadow-sm hover:text-red-500 z-20 top-2 text-white text-4xl right-2">
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <img
                    src="/images/renter.jpg"
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    className="h-full w-full object-cover z-0 object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xs block text-ellipsis whitespace-nowrap overflow-hidden text-gray-500">
                    <i className="fa-solid fa-location-dot"></i> ECC Road,
                    Pattandur Agrahara, Whitefield, Bangalore, Karnataka, India
                  </h3>
                  <h1 className="text-lg mb-6 font-semibold  text-ellipsis whitespace-nowrap overflow-hidden">
                    1 RK Apartment In Prestige Whistling Palms, Whitefield For
                    Rent In White
                  </h1>
                  <p className="mb-3 text-sm grid grid-cols-2 gap-y-4 gap-x-4">
                    <span className="">
                      <i className="fa-solid fa-bed mr-3"></i>3 Bedrooms
                    </span>
                    <span>
                      <i className="fa-solid fa-sink mr-3"></i>2 Bathrooms
                    </span>
                    <span className="">
                      <i className="fa-solid fa-sink mr-3"></i>Furnished
                    </span>
                    <span>
                      <i className="fa-solid fa-mountain mr-3"></i>3000 sqft.
                      Area.
                    </span>
                    <span className="">&#8377;&nbsp;&nbsp;20,000 Rent</span>
                    <span>&#8377;&nbsp;&nbsp;&nbsp;40,000 Deposit</span>
                  </p>
                  <button className="mt-3 w-full p-3 font-para  primary_button_without">
                    View property <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              <div className="relative rounded-lg border hover:shadow-xl transition duration-300">
                <div className="relative h-80 w-full rounded-lg overflow-hidden bg-white ">
                  <span className="absolute cursor-pointer shadow-sm hover:text-red-500 z-20 top-2 text-white text-4xl right-2">
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <img
                    src="/images/everyone.jpg"
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    className="h-full w-full object-cover z-0 object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xs block text-ellipsis whitespace-nowrap overflow-hidden text-gray-500">
                    <i className="fa-solid fa-location-dot"></i> ECC Road,
                    Pattandur Agrahara, Whitefield, Bangalore, Karnataka, India
                  </h3>
                  <h1 className="text-lg mb-6 font-semibold  text-ellipsis whitespace-nowrap overflow-hidden">
                    1 RK Apartment In Prestige Whistling Palms, Whitefield For
                    Rent In White
                  </h1>
                  <p className="mb-3 text-sm grid grid-cols-2 gap-y-4 gap-x-4">
                    <span className="">
                      <i className="fa-solid fa-bed mr-3"></i>3 Bedrooms
                    </span>
                    <span>
                      <i className="fa-solid fa-sink mr-3"></i>2 Bathrooms
                    </span>
                    <span className="">
                      <i className="fa-solid fa-sink mr-3"></i>Furnished
                    </span>
                    <span>
                      <i className="fa-solid fa-mountain mr-3"></i>3000 sqft.
                      Area.
                    </span>
                    <span className="">&#8377;&nbsp;&nbsp;20,000 Rent</span>
                    <span>&#8377;&nbsp;&nbsp;&nbsp;40,000 Deposit</span>
                  </p>
                  <button className="mt-3 w-full p-3 font-para  primary_button_without">
                    View property <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              <div className="relative rounded-lg border hover:shadow-xl transition duration-300">
                <div className="relative h-80 w-full rounded-lg overflow-hidden bg-white ">
                  <span className="absolute cursor-pointer shadow-sm hover:text-red-500 z-20 top-2 text-white text-4xl right-2">
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <img
                    src="/images/owner.jpg"
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    className="h-full w-full object-cover z-0 object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xs block text-ellipsis whitespace-nowrap overflow-hidden text-gray-500">
                    <i className="fa-solid fa-location-dot"></i> ECC Road,
                    Pattandur Agrahara, Whitefield, Bangalore, Karnataka, India
                  </h3>
                  <h1 className="text-lg mb-6 font-semibold  text-ellipsis whitespace-nowrap overflow-hidden">
                    1 RK Apartment In Prestige Whistling Palms, Whitefield For
                    Rent In White
                  </h1>
                  <p className="mb-3 text-sm grid grid-cols-2 gap-y-4 gap-x-4">
                    <span className="">
                      <i className="fa-solid fa-bed mr-3"></i>3 Bedrooms
                    </span>
                    <span>
                      <i className="fa-solid fa-sink mr-3"></i>2 Bathrooms
                    </span>
                    <span className="">
                      <i className="fa-solid fa-sink mr-3"></i>Furnished
                    </span>
                    <span>
                      <i className="fa-solid fa-mountain mr-3"></i>3000 sqft.
                      Area.
                    </span>
                    <span className="">&#8377;&nbsp;&nbsp;20,000 Rent</span>
                    <span>&#8377;&nbsp;&nbsp;&nbsp;40,000 Deposit</span>
                  </p>
                  <button className="mt-3 w-full p-3 font-para  primary_button_without">
                    View property <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- why use --> */}
      <div className="py-16 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl font-header">
              WHY USE REALVERSE RENTALS
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto font-para">
              A housing rental platform for you and me.
            </p>
          </div>

          <div className="mt-10 font-para">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              <div className="relative duration-300  hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-900 ease-in-out hover:rounded-lg transition cursor-pointer  p-4">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white">
                    <i className="fa-solid fa-users "></i>
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 font-header ">
                    Avoid Brokers
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base ">
                  We directly connected you to verified owners to avoid
                  brokerage.
                </dd>
              </div>

              <div className="relative duration-500 ease-in-out hover:rounded-lg transition cursor-pointer p-4  hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-900">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white">
                    <i className="fa-solid fa-list-ul "></i>
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 font-header ">
                    No hidden fees
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base ">
                  Easy listing process and free. By automation, you can also
                  connect us through whatsapp.
                </dd>
              </div>

              <div className="relative duration-500 ease-in-out hover:rounded-lg transition cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-900 p-4">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white">
                    <i className="fa-solid fa-house-user "></i>
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 font-header ">
                    Shortlist Without Visit
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base ">
                  Extensive information makes it easy, so you dont have to
                  travel around.
                </dd>
              </div>

              <div className="relative duration-500 ease-in-out hover:rounded-lg transition cursor-pointer  hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-900 p-4">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white">
                    <i className="fa-solid fa-file-contract"></i>
                  </div>
                  <p className="ml-16 text-lg font-semibold leading-6 font-header ">
                    Rental Agreement
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base ">
                  Assistance in creating Rental agreement and paper work{' '}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black  sm:text-5xl">
            <span className="block font-header">
              Want to find the best home?
            </span>
            <span className="block font-header text-indigo-600">
              It&#x27;s today or never.
            </span>
          </h2>
          <p className="text-lg font-para mt-4 max-w-md mx-auto text-gray-400">
            Have it your way. Give yourself a chance to call something your
            home, a place of joy and warmth.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="mt-12 sm:flex">
              <button
                type="button"
                className="py-4 px-6 mr-4 mb-2 sm:mb-0 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Sign up for free
              </button>
              <button
                type="button"
                className="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <i className="fa-solid fa-phone"></i> Enquire Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
