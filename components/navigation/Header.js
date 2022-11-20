/* eslint-disable @next/next/no-img-element */
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    setMobileMenu(false);
  }, [router]);

  return (
    <>
      <nav className="bg-white sticky top-0 z-20 shadow">
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
                onClick={() => setMobileMenu(true)}
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
                <Link href="/">Realverse Rentals </Link>
              </div>
            </div>

            <div className="absolute hidden sm:flex inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link href="/listproperty">
                <button type="button" className="primary_button">
                  <i className="fa-solid fa-clipboard-list"></i> List Property{' '}
                </button>
              </Link>
              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-4">
                <div>
                  <button
                    type="button"
                    className={`${
                      status === 'loading' && 'animate-ping'
                    } flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdown"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      width="32"
                      height="32"
                      src={`${
                        session ? session.user.image : '/icons/user.png'
                      }`}
                      alt={session ? session.user.name : 'user'}
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
                  {session ? (
                    <a
                      type="button"
                      onClick={() => signOut()}
                      className="block px-4 py-2 text-sm cursor-pointer hover:text-indigo-600 font-bold hover:underline hover:underline-offset-4 text-gray-700"
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
          className={`fixed ${
            mobileMenu ? 'grid' : 'hidden'
          } bg-white ease-in-out duration-300 w-full animate__animated animate__fadeInLeft h-full overflow-auto top-0  z-10`}
          id="mobile-menu"
        >
          <button
            className="p-2 w-10 h-10 focus:outline-none focus:ring-2 z-20 focus:ring-white text-white bg-red-400 border absolute top-4 right-4 rounded-md"
            id="close-mobile-menu-button"
            onClick={() => setMobileMenu(false)}
          >
            X
          </button>
          <Link href="/">
            <button
              className="p-2 w-10 h-10 focus:outline-none focus:ring-2 z-20 focus:ring-white text-white bg-gray-400 border absolute top-4 left-4 rounded-md"
              id="close-mobile-menu-button"
              onClick={() => setMobileMenu(false)}
            >
              <i className="fa-solid fa-house"></i>
            </button>
          </Link>

          <div className="space-y-1 px-4 relative">
            <div className="grid justify-center text-center py-6 mt-10 font-header tracking-wider gap-y-2">
              <img
                src={session ? session.user.image : '/icons/user.png'}
                className="w-36 h-36 rounded-full"
                alt={session ? session.user.name : 'profile'}
              />
              <span>
                {session && (
                  <>
                    Logged in as : <br />
                  </>
                )}
                <b>{session ? session.user.name : 'Not logged In'}</b>
              </span>
            </div>

            <Link href="/listproperty">
              <a className=" active:bg-indigo-700 bg-indigo-600 hover:bg-indigo-800 text-white  block px-3 py-4 rounded-md text-base font-medium">
                <i className="fa-solid fa-clipboard-list is-size-3"></i>
                &nbsp;&nbsp;List property
              </a>
            </Link>
            <Link href="/profile">
              <a className=" hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-base font-medium">
                <i className="fa-solid fa-user"></i>&nbsp;&nbsp;Profile
              </a>
            </Link>
            <Link href="/activity">
              <a className=" hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-base font-medium">
                <i className="fa-solid fa-briefcase"></i>&nbsp;&nbsp;Activity
              </a>
            </Link>
            {session ? (
              <>
                <a
                  className=" hover:bg-gray-700 hover:text-white block px-3 py-4 rounded-md text-base font-medium"
                  onClick={() => signOut()}
                >
                  <i className="fa-solid fa-right-to-bracket"></i>
                  &nbsp;&nbsp;Logout
                </a>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </nav>
      {/* <Script id="hello" src="/utils/functions.js" strategy="lazyOnload" /> */}
    </>
  );
}

export default Header;
