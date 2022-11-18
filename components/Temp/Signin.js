import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

function Signin() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex  font-para items-center mt-5 sm:mt-7 md:mt-10 justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-center font-main text-3xl sm:text-5xl font-extrabold tracking-wide hover:text-gray-700">
              <Link href="/">Realverse Rentals</Link>
            </h1>

            <p className="mt-2 text-center text-sm text-gray-600">
              <a href="#" className=" text-indigo-500 hover:text-indigo-700">
                Get your dream home.
              </a>
            </p>
          </div>
          <div className="grid space-y-6">
            <div className="flex items-center">
              <hr className="bg-gray-600 w-full" />
              <p className="text-xs text-center w-full text-gray-600">
                CONTINUE WITH
              </p>
              <hr className="bg-gray-600 w-full" />
            </div>
            <div className="flex flex-col sm:flex-row font-semibold gap-y-3 justify-between gap-x-6">
              <button
                onClick={() => signIn('facebook')}
                className="px-4 py-3 w-full bg-blue-700 hover:bg-blue-800 text-white"
              >
                <i className="fa-brands fa-facebook"></i> facebook
              </button>
              <button
                onClick={() => signIn('google')}
                className="px-4 py-3 w-full bg-red-600 hover:bg-red-700 text-white"
              >
                <i className="fa-brands fa-google"></i> Google
              </button>
            </div>
            <div className="flex items-center">
              <hr className="bg-gray-600 w-full" />
              <p className="text-xs text-center w-full text-gray-600">
                OR EMAIL
              </p>
              <hr className="bg-gray-600 w-full" />
            </div>
            {toggle ? (
              <>
                <form className="space-y-6" action="#" method="POST">
                  <div className="space-y-5  rounded-md shadow-sm text-sm">
                    <div className="grid gap-y-1.5">
                      <label htmlFor="email-address" className="font-semibold">
                        Full Name
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="text"
                        autoComplete="name"
                        required
                        className="relative block w-full appearance-none rounded-md placeholder:text-xs border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="joe green"
                      />
                    </div>
                    <div className="grid gap-y-1.5">
                      <label htmlFor="email-address" className="font-semibold">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-md placeholder:text-xs border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="grid gap-y-1.5">
                      <label htmlFor="email-address" className="font-semibold">
                        Phone Number
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-md placeholder:text-xs border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="grid gap-y-1.5">
                      <label htmlFor="password" className="font-semibold">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 placeholder:text-xs focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                      />
                    </div>
                    <div className="grid gap-y-1.5">
                      <label htmlFor="password" className="font-semibold">
                        Confirm Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 placeholder:text-xs focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div>
                    <a href="/api/auth/login">lcikc</a>

                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-400 py-2 px-4 text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                      </span>
                      Register
                    </button>
                  </div>
                </form>
                <div className="flex items-center text-sm">
                  <button
                    onClick={() => setToggle(false)}
                    className="text-indigo-500 font-semibold hover:text-indigo-700"
                  >
                    Already have an account, Login.
                  </button>
                </div>
              </>
            ) : (
              <>
                <form className="space-y-6" action="#" method="POST">
                  <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative placeholder:text-xs block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter Phone Number or Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative placeholder:text-xs block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-gray-600 hover:text-gray-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-400 py-2 px-4 text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                      </span>
                      Sign in
                    </button>
                  </div>
                </form>
                <div className="flex items-center text-sm">
                  <button
                    onClick={() => setToggle(true)}
                    className="text-indigo-500 font-semibold hover:text-indigo-700"
                  >
                    Dont have an account, Create one.
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
