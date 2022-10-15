import ProfileSidebar from '../navigation/ProfileSidebar';

function Profile() {
  return (
    <>
      <div className="">
        <div className="max-w-6xl mx-auto h-fit mt-6">
          <div className="grid grid-cols-12">
            {/* <!-- left sidebar --> */}
            <ProfileSidebar />
            {/* <!-- end of left sidebar -->
            <!-- right sidebar --> */}
            <div className="col-span-12 mx-3 md:col-span-7 mt-10 md:mt-0 sm:mx-7">
              <div className="w-full md:max-w-md pb-5 gap-y-6 grid">
                <form className="grid gap-y-2 bg-white p-6 rounded-xl">
                  <label className="text-sm font-bold">Name</label>
                  <input
                    type="text"
                    className="border-0 mb-2 border-b focus:outline-none focus:border-0"
                    value="Kadum Komut"
                    placeholder="Kadum Komut"
                  />
                  <label className="text-sm font-bold">Email</label>
                  <input
                    type="Email"
                    className="border-0 mb-2 border-b"
                    value="kadumkomut2826"
                  />
                  <button className="primary_button_without p-3 w-1/2">
                    Save changes
                  </button>
                </form>

                <form className="grid gap-y-2 bg-white p-6 rounded-xl">
                  <label className="text-sm font-bold">
                    Change Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="Phone"
                    className="border-0 mb-2 border-b"
                    value=""
                  />
                  <button
                    className="bg-gray-4 bg-gray-200  py-3 px-3 w-24 sm:text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    disabled
                  >
                    Send OTP
                  </button>
                </form>

                <form className="grid gap-y-2 bg-white p-6 rounded-xl">
                  <label className="text-sm font-bold">Change Password</label>
                  <button className="primary_button w-24 p-3" disabled>
                    Send OTP
                  </button>
                  <p className="text-xs text-gray-500">
                    Get OTP on your registered Phone/Email
                  </p>
                </form>
              </div>
            </div>
            {/* <!-- end of right sidebar --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
