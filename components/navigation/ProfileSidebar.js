import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useRouter } from 'next/router';

function ProfileSidebar() {
  const router = useRouter();
  const { user } = useUser();
  return (
    <>
      {/* <!-- left sidebar --> */}
      <div className="col-span-12 mx-3 md:col-span-5 sm:mx-7">
        <div className="sticky top-24 bg-white py-10 border rounded-xl">
          <div className="text-center">
            <img
              src={user && user.picture}
              className="rounded-full w-32 mb-4 mx-auto ring-2 ring-offset-8 ring-indigo-600"
              alt={user && user.name}
            />
            <h5 className="text-xl font-medium leading-tight mb-2">
              {user && user.name}
            </h5>
            <p className="text-gray-500">{user && user.email}</p>
          </div>
          <div className="relative bg-white  ">
            <div className="flex flex-col sm:flex-row sm:justify-around ">
              <div className="w-full ">
                <nav className="mt-7 px-6 grid gap-y-3">
                  <Link href="/profile">
                    <a
                      className={`hover:text-gray-800 ${
                        router.pathname === '/profile'
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-600'
                      } hover:bg-indigo-400 flex items-center p-2 transition-colors duration-200    rounded-lg`}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                      <span className="mx-4 text-lg font-normal">
                        Edit Profile
                      </span>
                      <span className="flex-grow text-right"></span>
                    </a>
                  </Link>
                  <Link href="/activity">
                    <a
                      className={`hover:text-gray-800 ${
                        router.pathname === '/activity'
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-600'
                      } hover:bg-indigo-400 flex items-center p-2 transition-colors   duration-200    rounded-lg`}
                      href="http://realverse.rentals/activites.html"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                      <span className="mx-4 text-lg font-normal">
                        My activities
                      </span>
                      <span className="flex-grow text-right"></span>
                    </a>
                  </Link>
                  <a
                    className="hover:text-gray-800  hover:bg-indigo-400 flex items-center p-2 transition-colors  duration-200  text-gray-600  rounded-lg"
                    href="#"
                  >
                    <i className="fa-solid fa-question"></i>
                    <span className="mx-4 font-medium">Support</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {/* <!-- end of left sidebar -->} */}
    </>
  );
}

export default ProfileSidebar;
