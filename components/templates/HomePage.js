import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import HomePropertyCard from '../cards/HomePropertyCard';
import WhyUseCard from '../cards/WhyUseCard';

function HomePage() {
  const [locationInput, setLocationInput] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [rooms, setRooms] = useState('');
  const [furnishing, setFurnishing] = useState('');
  const router = useRouter();
  const handleSearchForm = (e) => {
    e.preventDefault();
    if (
      locationInput === '' ||
      priceRange === '' ||
      rooms === '' ||
      furnishing === ''
    ) {
      alert('fill all the inputs');
      return;
    }
    router.push({
      pathname: '/property',
      query: {
        search: locationInput,
        pr: priceRange,
        ro: rooms,
        fu: furnishing,
      },
    });
  };
  return (
    <>
      <div
        className="max-w-full mb-16 py-56 sm:py-64 bg-cover flex justify-center bg-no-repeat relative bg-center"
        style={{
          backgroundImage: 'url("/images/kitchen-g0bb9e248f_1920.webp")',
        }}
      >
        <h1 className="text-xl text-center absolute top-28 sm:top-52 sm:text-3xl md:text-5xl bg-gradient-to-br from-cyan-900 via-gray-500 to-cyan-900 p-6 rounded-md opacity-70 font-para font-extrabold tracking-wider animate-bounce text-neutral-100">
          Get Your Dream Home
        </h1>
        <div className="max-w-7xl px-4 py-5 mx-3 sm:p-8 rounded-md bg-white shadow-lg absolute -bottom-32 sm:-bottom-28 lg:-bottom-16">
          <form
            className="grid grid-cols-12 gap-2 sm:gap-2"
            onSubmit={handleSearchForm}
          >
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <input
                type="text"
                name="searchHomePage"
                id="searchHomePage"
                autoComplete="off"
                placeholder="Location*"
                onChange={(e) => setLocationInput(e.target.value)}
                value={locationInput}
                required
                spellCheck="false"
                className="block w-full  rounded-md border-gray-300 shadow-sm py-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm "
              />
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-2">
              <select
                onChange={(e) => setPriceRange(e.target.value)}
                className=" block w-full rounded-md border border-gray-300 py-4 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              >
                <option value="" className="text-gray-500">
                  Price Range*
                </option>
                <option value="4000-10000">Between 4k-10k</option>
                <option value="10000-15000">Between 10k-15k</option>
                <option value="15000-25000">Between 15k-25k</option>
                <option value="25000-35000">Between 25k-35k</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <select
                onChange={(e) => setRooms(e.target.value)}
                className=" block w-full rounded-md border border-gray-300 py-4 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              >
                <option value="">Bedrooms*</option>
                <option value="0">1 Rk</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">3+ BHK</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <select
                onChange={(e) => setFurnishing(e.target.value)}
                className=" block w-full rounded-md border border-gray-300 py-4 bg-white px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              >
                <option value="">Furnishing*</option>
                <option value="Fully-Furnished">Furnished</option>
                <option value="Semi-Furnished">Semi-furnished</option>
                <option value="Unfurnished">Unfurnished</option>
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
        <h1 className="text-center text-2xl">Our Customer Says</h1>
        <div className="mt-10 md:flex text-xl justify-evenly font-thin">
          <div>
            <i>
              <q>
                &nbsp;I have had the best assitance in finding my room, thanks
                to realverse rentals.
              </q>
            </i>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900 font-header">
              Recommended Properties for Renting
            </h2>

            <div className="mt-6 space-y-12 md:grid md:grid-cols-2 font-para md:gap-x-4 md:space-y-0 lg:grid-cols-3 lg:gap-x-6">
              <HomePropertyCard image="listingexample.jpg" />
              <HomePropertyCard image="listingexample2.jpg" />
              <HomePropertyCard image="listingexample3.jpg" />
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
              <WhyUseCard
                icon="fa-solid fa-users "
                title="Avoid Brokers"
                text="We directly connected you to verified owners to avoid
                  brokerage."
              />
              <WhyUseCard
                icon="fa-solid fa-list-ul"
                title="No hidden fees"
                text="Easy listing process and free. By automation, you can also
                connect us through whatsapp."
              />
              <WhyUseCard
                icon="fa-solid fa-house-user"
                title="Shortlist Without Visit"
                text="Extensive information makes it easy, so you dont have to
                travel around."
              />
              <WhyUseCard
                icon="fa-solid fa-file-contract"
                title="Rental Agreement"
                text="Assistance in creating Rental agreement and paper work"
              />
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
          <p className="text-lg font-para mt-4 max-w-md mx-auto text-gray-500">
            Have it your way. Give yourself a chance to call something your
            home, a place of joy and warmth.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="mt-12 sm:flex">
              <a
                href="/signin"
                type="button"
                className="py-4 px-6 mr-4 mb-2 sm:mb-0 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Sign up for free
              </a>
              <Link href="/contact">
                <button
                  type="button"
                  className="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  <i className="fa-solid fa-phone animate-pulse"></i> Enquire Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
