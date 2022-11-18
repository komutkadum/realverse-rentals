import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function ProfileSidebar() {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <>
      {/* <!-- left sidebar --> */}
      <div className="col-span-12 mx-3 md:col-span-5 sm:mx-7">
        <div className="sticky top-24 bg-white py-10 border rounded-xl">
          <div className="text-center">
            <div className="ring-2 ring-offset-8 grid place-items-center ring-indigo-600 w-32 mx-auto rounded-full mb-4">
              {session && session.user.image ? (
                <img
                  src={session && session.user.image}
                  title={session && session.user.image}
                  height="128"
                  width="128"
                  className="rounded-full"
                  alt={session && session.user.name}
                />
              ) : (
                <Image
                  src="/icons/user.png"
                  height="128"
                  width="128"
                  alt="hello"
                />
              )}
            </div>
            <h5 className="text-xl font-medium leading-tight mb-2">
              {session && session.user.name}
            </h5>
            <p className="text-gray-500">{session && session.user.email}</p>
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
                      <i className="fa-solid fa-briefcase"></i>
                      <span className="mx-4 text-lg font-normal">
                        My activities
                      </span>
                      <span className="flex-grow text-right"></span>
                    </a>
                  </Link>
                  <Link href="/dashboard">
                    <a
                      className={`hover:text-gray-800 ${
                        router.pathname === '/dashboard'
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-600'
                      } hover:bg-indigo-400 flex items-center p-2 transition-colors   duration-200    rounded-lg`}
                      href="http://realverse.rentals/activites.html"
                    >
                      <i className="fa-solid fa-chart-simple"></i>
                      <span className="mx-4 text-lg font-normal">
                        Dashboard
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
