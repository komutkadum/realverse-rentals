import Link from 'next/link';

function About() {
  return (
    <>
      <section className="max-w-3xl px-4 mx-auto py-10 md:py-20 lg:py-36 ">
        <div className="text-center px-4 pb-10 font-header">
          <h2 className="text-lg font-semibold tracking-wider text-red-600">
            Our purpose
          </h2>
          <p className="mt-6 text-3xl font-medium leading-8 tracking-tight text-gray-900 sm:text-4xl">
            We create opportunity for everyone to make a fresh start
          </p>
        </div>
        <div className="grid gap-y-4 font-para text-gray-700">
          <p>
            We believe finding your new apartment is more than just a move. It’s
            something bigger. A step forward. A new beginning. A fresh start.
            Whether you’re moving across the country or across the street, you
            deserve to love where you land.
          </p>
          <p>
            But today’s rental experience is broken. It’s outdated, exhausting,
            and slow. We spend hours of our lives searching just to settle for
            places that don’t feel like home. The nightmare ends now.
          </p>
          <p>
            Realverse rentals is on a mission to change the way you rent,
            forever. To make it easier, faster, and more human. By making this
            vision a reality, we’re creating opportunity for everyone to live
            better—from one fresh start to the next.
          </p>
        </div>
      </section>

      <section className=" bg-slate-800">
        <div className="max-w-5xl px-4 mx-auto py-10 md:py-20 lg:py-36 grid">
          <h1 className="text-center font-bold text-lg text-red-400">
            Who we help
          </h1>
          <div className="grid gap-x-10 py-10 md:py-16 lg:py-24  items-center text-center md:text-left md:grid-cols-2">
            <div className="lg:pr-10">
              <h5 className="mb-4 text-4xl font-medium text-white font-header">
                Renters
                <br className="hidden md:block" />
                <p className="text-gray-400">
                  {' '}
                  By making renting an apartment as easy as booking a hotel
                </p>
              </h5>
              <p className="mb-6 text-gray-300 font-para">
                From browsing and touring to applying and signing the lease, the
                entire process is becoming faster, easier, and more trustworthy
                on Realverse rentals.
              </p>
              <hr className="mb-5 hidden lg:block border-gray-300" />
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="/images/renter.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-x-10 py-10 md:py-16 lg:py-24 items-center text-center md:text-left md:grid-cols-2">
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="/images/owner.jpg"
                alt=""
              />
            </div>
            <div className="lg:pr-10 grid">
              <h5 className="mt-4 md:mb-4 text-4xl font-medium text-white font-header">
                Property owners
                <br className="hidden md:block" />
                <p className="text-gray-400">
                  By connecting them with quality renters
                </p>
              </h5>
              <p className="mt-6 sm:mb-6 text-gray-300 font-para">
                We connect property owners and multifamily partners with quality
                renters and give them the tools they need to fill more
                vacancies, more quickly.
              </p>
              <hr className="mt-5 sm:mb-5 hidden lg:block border-gray-300" />
            </div>
          </div>

          <div className="grid gap-x-10 py-10 md:py-16 lg:py-24 items-center text-center md:text-left md:grid-cols-2">
            <div className="lg:pr-10 ">
              <h5 className="mb-4 text-4xl font-medium text-white font-header">
                Everyone
                <br className="hidden md:block" />
                <p className="text-gray-400">
                  By fostering a safe and respectful renting experience
                </p>
              </h5>
              <p className="mb-6 text-gray-300 font-para">
                We have a zero-tolerance policy for any form of discrimination
                and we build products that are accessible to all.
              </p>
              <hr className="mb-5 hidden lg:block border-gray-300" />
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="/images/everyone.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl px-4 mx-auto py-10 md:py-20 lg:py-64">
        <div className="text-center px-4 pb-10 font-header">
          <h2 className="text-lg font-semibold tracking-wider text-red-600">
            Giving back
          </h2>
          <p className="mt-6 text-3xl font-medium leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Building a better world <br /> starts at home
          </p>
        </div>
        <div className="grid gap-y-4 font-para font-medium leading-relaxed text-gray-700">
          <p>
            We’re committed to building community both through our investment in
            accessibility projects and the preservation and beautification of
            public spaces. From park cleanups to public art installations to
            inclusivity and ADA compliance initiatives, our dedication to
            community development comes from our unwavering belief that everyone
            deserves to find communities that feel like home.
          </p>
          <p>
            We’re proud to support and partner with organizations that share in
            this dedication and effect change on both local and global scales.
          </p>
        </div>
      </section>

      <section className=" bg-white">
        <div className="max-wxl px-4 mx-auto py-10 md:py-20 lg:py-40">
          <div className="text-center px-4 pb-10 font-header">
            <h2 className="text-lg font-semibold tracking-wider text-red-600">
              Core Team
            </h2>
            <p className="mt-6 text-3xl font-medium leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Meet the people behind
              <br /> Realverse Rentals
            </p>
          </div>
          <div className="-para font-medium leading-relaxed text-gray-700">
            {/* <!-- team --> */}
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
              <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
                <div className="grid sm:grid-cols-3">
                  <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                    <img
                      className="absolute object-cover w-full h-full rounded"
                      src="/images/kadum.jpeg"
                      alt="Person"
                    />
                  </div>
                  <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                    <p className="text-lg font-bold">Kadum Komut</p>
                    <p className="mb-4 text-xs text-gray-800">Lead Developer</p>
                    <p className="mb-4 text-sm tracking-wide text-gray-800">
                      Loves to learn new things at his free time.
                    </p>
                    <div className="flex items-center space-x-3">
                      <Link
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </Link>
                      <Link
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3">
                  <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                    <img
                      className="absolute object-cover w-full h-full rounded"
                      src="/images/akshay.jfif"
                      alt="Person"
                    />
                  </div>
                  <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                    <p className="text-lg font-bold">Aksnay Mishra</p>
                    <p className="mb-4 text-xs text-gray-800">Lead Developer</p>
                    <p className="mb-4 text-sm tracking-wide text-gray-800">
                      A great conversionalist.
                    </p>
                    <div className="flex items-center space-x-3">
                      <Link
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </Link>
                      <Link
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end of team --> */}
          </div>
        </div>
      </section>

      <div className="px-4 py-10 md:py-16 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 text-center">
            <Link href="/" className="mb-6 mx-auto">
              <div className="flex items-center text-white justify-center w-12 h-12 rounded-full bg-indigo-600">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
            </Link>
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative">FAQ</span>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                How can we help you?
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border rounded shadow-sm">
              <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
              >
                <p className="text-lg font-medium">
                  The quick, brown fox jumps over a lazy dog?
                </p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                  {/* <!-- Add "transform rotate-180" classes on svg, if is open" --> */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 text-gray-600 transition-transform duration-200"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      points="2,7 12,17 22,7"
                      strokeLinejoin="round"
                    ></polyline>
                  </svg>
                </div>
              </button>
              {/* <!-- Show content if is open  --> */}
              <div className="p-4 pt-0">
                <p className="text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
              </div>
            </div>
            <div className="border rounded shadow-sm">
              <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
              >
                <p className="text-lg font-medium">
                  The first mate and his Skipper too will do?
                </p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 text-gray-600 transition-transform duration-200 transform rotate-180"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      points="2,7 12,17 22,7"
                      strokeLinejoin="round"
                    ></polyline>
                  </svg>
                </div>
              </button>
              {/* <!-- Show content if is open 
              <div className="p-4 pt-0"><p className="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p></div>
              --> */}
            </div>
            <div className="border rounded shadow-sm">
              <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
              >
                <p className="text-lg font-medium">
                  Is the Space Pope reptilian!?
                </p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 text-gray-600 transition-transform duration-200 transform rotate-180"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      points="2,7 12,17 22,7"
                      strokeLinejoin="round"
                    ></polyline>
                  </svg>
                </div>
              </button>
              {/* <!-- Show content if is open 
              <div className="p-4 pt-0"><p className="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p></div>
              --> */}
            </div>
            <div className="border rounded shadow-sm">
              <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
              >
                <p className="text-lg font-medium">
                  How much money you got on you?
                </p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 text-gray-600 transition-transform duration-200 transform rotate-180"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      points="2,7 12,17 22,7"
                      strokeLinejoin="round"
                    ></polyline>
                  </svg>
                </div>
              </button>
              {/* <!-- Show content if is open
              <div className="p-4 pt-0"><p className="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p></div>
              --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
