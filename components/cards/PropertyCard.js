function PropertyCard() {
  return (
    <div className="grid grid-cols-8 cursor-pointer border-gray-300 overflow-hidden border font-para bg-white">
      <div
        className="aspect-w-16  col-span-8 bg-center bg-no-repeat bg-cover md:col-span-4 aspect-h-10 border-r"
        style={{
          backgroundImage: "url('/images/kitchen-g0bb9e248f_1920.jpg')",
        }}
      >
        {/* <!-- <img src="kitchen-g0bb9e248f_1920.jpg" alt="shopping image" className="object-cover md:object-contain object-center"/> --> */}
      </div>
      <form className="col-span-8 md:col-span-4 w-full px-2 md:px-3 grid gap-y-5 md:gap-y-3 py-3 items-center border-b">
        <div>
          <h4 className="text-xs text-gray-500">
            3 bhk Apartment rent in whitefield
          </h4>
          <h4 className="font-bold">Prestige lakeside habitat</h4>
        </div>
        <div className="gap-x-1 -mt-4 md:-mt-3 media-scroller">
          <p className="badge">15&nbsp;places</p>
          <p className="badge">3&nbsp;educations</p>
          <p className="badge">1&nbsp;Atm</p>
          <p className="badge">1&nbsp;Hospital</p>
          <p className="badge">1&nbsp;Pharmacy</p>
          <p className="badge">1&nbsp;Office&nbsp;complex</p>
          <p className="badge">5&nbsp;Miscellaneous</p>
        </div>
        <div className="">
          <div className="flex justify-between font-bold">
            <span>
              Rs 20,000{' '}
              <span className="text-xs text-gray-400 font-light">/month</span>
            </span>
            <span>
              2,134{' '}
              <span className="text-xs font-light text-gray-400">sq.ft</span>
            </span>
            <span>3 BHK</span>
          </div>
          <div
            className=" flex justify-between text-gray-400 font-light"
            style={{ fontSize: '10px' }}
          >
            <span>Deposits 6 month rent</span>
            <span>build up area</span>
            <span>4 Baths</span>
          </div>
        </div>
        <div className="overflow-ellipsis overflow-hidden whitespace-nowrap text-sm text-gray-600">
          Find this 3bhk apartment for rent in whitefield bangalore east this
        </div>
      </form>
      <div className="col-span-8 grid sm:flex w-full gap-y-2 sm:justify-between items-center p-3">
        <div>
          <p className="text-xs text-gray-500">Update2days ago by dealer</p>
          <h3 className="font-bold">Preminent property solution</h3>
        </div>
        <div className="flex justify-between gap-x-2 md:gap-x-0">
          <button className="primary_button font-header w-full">
            Contact Dealer
          </button>
          <button className="sm:ml-1 primary_button_light">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
