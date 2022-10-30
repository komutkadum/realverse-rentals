/* eslint-disable @next/next/no-img-element */
export const MobileApps = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-lg sm:text-center sm:mx-auto">
        <a
          href="/"
          aria-label="Go Home"
          title="Logo"
          className="inline-block mb-4"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
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
              />
            </svg>
          </div>
        </a>
        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative bg-white">Home</span>
          </span>{' '}
          is the starting place of love, hope and dreams.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          These home will remind you that there&apos;s no place like it. They
          will help you celebrate and appreciate where you lay your head.
        </p>
        <hr className="my-8 border-gray-300" />
        <div className="flex items-center mb-3 sm:justify-center">
          <a href="/" className="mr-3 transition duration-300 hover:shadow-lg">
            <img
              src="/images/playstore.png"
              className="object-cover object-top w-32 mx-auto"
              alt=""
            />
          </a>
          <a href="/" className="transition duration-300 hover:shadow-lg">
            <img
              src="/images/applestore.png"
              className="object-cover object-top w-32 mx-auto"
              alt=""
            />
          </a>
        </div>
        <p className="max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto">
          Get started with us.{' '}
          <span className="text-indigo-600 font-semibold underline underline-offset-4">
            Its free and ever.
          </span>
        </p>
      </div>
    </div>
  );
};
