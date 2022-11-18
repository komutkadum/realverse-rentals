import { signIn } from 'next-auth/react';

function Signin() {
  return (
    <>
      <div className="flex  font-para items-center mt-5 sm:mt-7 md:mt-10 justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-center font-main text-3xl sm:text-5xl font-extrabold tracking-wide hover:text-gray-700">
              Realverse Rentals
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
            <div className="grid grid-cols-1 font-semibold gap-y-6 justify-between gap-x-6">
              <button
                onClick={() => signIn('facebook', { callbackUrl: '/' })}
                className="px-4 py-3 w-full bg-blue-700 hover:bg-blue-800 text-white"
              >
                <i className="fa-brands fa-facebook"></i> facebook
              </button>
              <button
                onClick={() => signIn('google', { callbackUrl: '/' })}
                className="px-4 py-3 w-full bg-red-600 hover:bg-red-700 text-white"
              >
                <i className="fa-brands fa-google"></i> Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
