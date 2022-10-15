import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-slate-700 pt-4 pb-8 xl:pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 tracking-wide ">
        <ul className="text-lg text-center md:text-left font-light pb-8 flex flex-wrap justify-center">
          <li className="w-full md:w-1/2 lg:w-1/4">
            <div className="text-sm font-bold">
              <h2 className="text-white font-bold text-lg uppercase mb-7 font-header">
                COMPANY
              </h2>
              <ul className="font-para">
                <li className="mb-4">
                  <Link href="/about">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      About Us
                    </a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/team">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      Teams
                    </a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/partners">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      For Partners
                    </a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/termsandservices">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      Terms and Services
                    </a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/privacypolicy">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/contact">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/4">
            <div className="text-sm font-bold">
              <h2 className="text-white font-bold text-lg uppercase mb-7 font-header">
                Realverse
              </h2>
              <ul className="font-para">
                <li className="mb-4 ">
                  <Link href="/apps">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      Mobile Apps
                    </a>
                  </Link>
                </li>
                <li className="mb-4 ">
                  <Link href="services">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      Our Services
                    </a>
                  </Link>
                </li>
                <li className="mb-4 ">
                  <Link href="listproperty">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      Post Your Property
                    </a>
                  </Link>
                </li>
                <li className="mb-4 ">
                  <Link href="partners">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      Builder Partners
                    </a>
                  </Link>
                </li>
                <li className="mb-4 ">
                  <Link href="areaconverter">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      Area Converter
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/4">
            <div className="text-sm font-bold">
              <h2 className="text-white font-header font-bold text-lg uppercase mb-7">
                Explore
              </h2>
              <ul className="font-para">
                <li className="mb-4 ">
                  <Link href="/news">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      News
                    </a>
                  </Link>
                </li>
                <li className="mb-4 ">
                  <Link href="/sitemap">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      Sitemap
                    </a>
                  </Link>
                </li>
                <li className="mb-4 ">
                  <Link href="/International">
                    <a className="hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8">
                      International
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/4 ">
            <h2 className="text-white font-bold text-lg uppercase mb-7 font-header">
              Connect with us
            </h2>
            <div className="flex gap-x-4 justify-center md:justify-start">
              <Link
                href="#"
                className="text-xl hover:bg-slate-700 hover:text-white transition duration-200"
              >
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link
                href="#"
                className=" text-xl hover:bg-slate-700 hover:text-white transition duration-200"
              >
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link
                href="#"
                className=" text-xl hover:bg-slate-700 hover:text-white transition duration-200"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>
              <Link
                href="#"
                className=" text-xl hover:bg-slate-700 hover:text-white transition duration-200"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
            <h2 className="text-white mt-5 font-bold text-lg uppercase mb-5 font-header">
              Contact us
            </h2>
            <p className="font-para text-sm font-bold ">
              Email : &nbsp;
              <Link href="mailto:support@realverse.rentals">
                <a className="hover:text-white hover:underline hover:underline-offset-8 transition-all duration-200">
                  support@realverse.rentals
                </a>
              </Link>
            </p>
          </li>
        </ul>
        <hr />
        <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full max-w-lg md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className="relative ">
              <input
                type="text"
                id="form-subscribe-Subscribe"
                className="rounded-md border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="Email"
              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white  rounded-lg shadow-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-slate-700 focus:ring-offset-2"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center pt-5 font-light font-para flex items-center justify-center">
          © 2022 Realverse Proptech Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
