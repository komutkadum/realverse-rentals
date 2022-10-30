import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, error, isLoading } = useUser();
  return (
    <>
      <nav className="bg-white sticky top-0 z-30 shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                id="mobile-menu-button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* <!--end of Mobile menu button--> */}
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 text-slate-700 items-center font-extrabold hover:text-slate-500 hover:underline hover:underline-offset-8 cursor-pointer text-2xl  font-header">
                <Link href="/">Realverse Rentals</Link>
              </div>
            </div>
            <div className="absolute hidden sm:flex inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link href="/listproperty">
                <button type="button" className="primary_button ">
                  <i className="fa-solid fa-clipboard-list"></i> List Property
                </button>
              </Link>
              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-4">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdown"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="h-8 w-8 rounded-full"
                      width="32"
                      height="32"
                      src={`${user ? user.picture : '/icons/user.png'}`}
                      alt="hello"
                    />
                  </button>
                </div>
                <div
                  className={`absolute font-para right-0 z-10 mt-2 w-48  origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden`}
                  id="dropdown"
                >
                  <Link href="/profile">
                    <a
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-sm hover:text-indigo-600 font-bold hover:underline hover:underline-offset-4 text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      {' '}
                      <i className="fa-solid fa-user"></i>&nbsp;&nbsp;Profile
                    </a>
                  </Link>

                  <Link href="/activity">
                    <a
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-sm hover:text-indigo-600 font-bold hover:underline hover:underline-offset-4 text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      <i className="fa-solid fa-briefcase is-size-3"></i>
                      &nbsp;&nbsp;My activities
                    </a>
                  </Link>
                  {user ? (
                    <a
                      href="/api/auth/logout"
                      className="block px-4 py-2 text-sm hover:text-indigo-600 font-bold hover:underline hover:underline-offset-4 text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      {' '}
                      <i className="fa-solid fa-right-to-bracket"></i>
                      &nbsp;&nbsp;Logout
                    </a>
                  ) : (
                    <>
                      <Link href="/signin">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm hover:text-indigo-600 font-bold hover:underline hover:underline-offset-4 text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-0"
                        >
                          {' '}
                          <i className="fa-solid fa-right-to-bracket"></i>
                          &nbsp;&nbsp;Login
                        </a>
                      </Link>
                      <Link href="/signin">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm hover:text-indigo-600 font-bold hover:underline hover:underline-offset-4 text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-1"
                        >
                          <i className="fa-solid fa-user-plus"></i>
                          &nbsp;&nbsp;Signup
                        </a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className="fixed grid bg-white w-0 ease-in-out duration-300 h-full overflow-auto top-0 items-center z-10"
          id="mobile-menu"
        >
          <button
            className="p-2 focus:outline-none focus:ring-2 focus:ring-white text-white bg-gray-400 border absolute top-4 right-4 rounded-md"
            id="close-mobile-menu-button"
          >
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="space-y-1 px-4 relative">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link href="/listproperty">
              <a className=" active:bg-indigo-700 bg-indigo-600 hover:bg-indigo-800 text-white  block px-3 py-4 rounded-md text-base font-medium">
                <i className="fa-solid fa-clipboard-list is-size-3"></i>
                &nbsp;&nbsp;List property
              </a>
            </Link>
            <Link href="/signin">
              <a className=" hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-base font-medium">
                <i className="fa-solid fa-right-to-bracket"></i>
                &nbsp;&nbsp;Login
              </a>
            </Link>
            <Link href="/signin">
              <a className=" hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-base font-medium">
                <i className="fa-solid fa-user-plus"></i>&nbsp;&nbsp;Signup
              </a>
            </Link>
            <Link href="/activity">
              <a className=" hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-base font-medium">
                <div className="flex justify-between">
                  <span>
                    <i className="fa-solid fa-briefcase is-size-3"></i>
                    &nbsp;&nbsp;Activity
                  </span>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <Script id="hello" src="/utils/functions.js" strategy="lazyOnload" />
    </>
  );
}

export default Header;
