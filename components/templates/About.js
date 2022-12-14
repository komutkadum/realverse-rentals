/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Accordion from '../utility/Accordion';

function About() {
  return (
    <>
      <section className="max-w-3xl px-4 mx-auto  py-20 md:py-28 lg:py-36 ">
        <div className="text-center px-4 pb-10 font-header">
          <h2 className="text-lg font-semibold tracking-wider text-red-600">
            Our purpose
          </h2>
          <p className="mt-3 text-3xl font-medium leading-8 tracking-tight text-gray-900 sm:text-4xl">
            We create opportunity for everyone to make a fresh start
          </p>
        </div>
        <div className="grid gap-y-4 font-para  text-gray-700">
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

      <section className=" bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-5xl px-4 mx-auto py-20 md:py-28 lg:py-36 grid">
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
                src="/images/renter.webp"
                alt=""
              />
            </div>
          </div>

          <div className="grid gap-x-10 py-10 md:py-16 lg:py-24 items-center text-center md:text-left md:grid-cols-2">
            <div className="hidden md:block">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="/images/owner.webp"
                alt=""
              />
            </div>
            <div className="lg:pr-10 grid">
              <h5 className="mt-4 md:mb-0 text-4xl font-medium text-white font-header">
                Property owners
                <br className="hidden md:block" />
                <p className="text-gray-400">
                  By connecting them with quality renters
                </p>
              </h5>
              <p className="mt-6 sm:mb-0 text-gray-300 font-para">
                We connect property owners and multifamily partners with quality
                renters and give them the tools they need to fill more
                vacancies, more quickly.
              </p>
              <hr className="mt-5 sm:mb-0 hidden lg:block border-gray-300" />
            </div>
            <div className="block mt-6 md:hidden">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="/images/owner.webp"
                alt=""
              />
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
                src="/images/everyone.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl px-4 mx-auto py-24 md:py-32 lg:py-48">
        <div className="text-center px-4 pb-10 font-header">
          <h2 className="text-lg font-semibold tracking-wider text-red-600">
            Giving back
          </h2>
          <p className="mt-3 text-3xl font-medium leading-8 tracking-tight text-gray-900 sm:text-4xl">
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
        <div className="max-wxl px-4 mx-auto py-20 md:py-28 lg:py-40">
          <div className="text-center mb-3 px-4 pb-10 font-header">
            <h2 className="text-lg font-semibold tracking-wider text-red-600">
              Core Team
            </h2>
            <p className="mt-3 text-3xl font-medium leading-8 text-gray-900 sm:text-4xl">
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
                      src="/images/kadum.webp"
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
                        <i className="fa-brands fa-facebook text-2xl"></i>
                      </Link>
                      <Link
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        <i className="fa-brands fa-linkedin text-2xl"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3">
                  <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                    <img
                      className="absolute object-cover w-full h-full rounded"
                      src="/images/akshay.webp"
                      alt="Person"
                    />
                  </div>
                  <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                    <p className="text-lg font-bold">Akshay Mishra</p>
                    <p className="mb-4 text-xs text-gray-800">Lead Developer</p>
                    <p className="mb-4 text-sm tracking-wide text-gray-800">
                      A great conversionalist.
                    </p>
                    <div className="flex items-center space-x-3">
                      <Link
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        <i className="fa-brands fa-facebook text-2xl"></i>
                      </Link>
                      <Link
                        href="/"
                        className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                        <i className="fa-brands fa-linkedin text-2xl"></i>
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
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative font-header">FAQ</span>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-xl font-medium font-para">
                How can we help you?
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <Accordion
              question="The quick, brown fox jumps over a lazy dog?"
              answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
            />
            <Accordion
              question="The first mate and his Skipper too will do?"
              answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
            />
            <Accordion
              question="The quick, brown fox jumps over a lazy dog?"
              answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
            />
            <Accordion
              question="The quick, brown fox jumps over a lazy dog?"
              answer="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
