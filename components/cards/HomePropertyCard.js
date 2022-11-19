/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

function HomePropertyCard({ image }) {
  return (
    <>
      <div className="relative rounded-lg border hover:shadow-xl transition duration-300">
        <div className="relative h-80 w-full rounded-lg overflow-hidden bg-white ">
          <span className="absolute cursor-pointer shadow-sm hover:text-red-500 z-20 top-2 text-white text-4xl right-2">
            <i className="fa-solid fa-heart"></i>
          </span>
          <img
            src={`/images/${image}`}
            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
            className="h-full w-full object-cover z-0 object-center"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-xs block text-ellipsis whitespace-nowrap overflow-hidden text-gray-500">
            <i className="fa-solid fa-location-dot"></i> ECC Road, Pattandur
            Agrahara, Whitefield, Bangalore, Karnataka, India
          </h3>
          <h1 className="text-lg mb-6 font-semibold  text-ellipsis whitespace-nowrap overflow-hidden">
            1 RK Apartment In Prestige Whistling Palms, Whitefield For Rent In
            White
          </h1>
          <p className="mb-3 text-sm grid grid-cols-2 gap-y-4 gap-x-4">
            <span className="">
              <i className="fa-solid fa-bed mr-3"></i>3 Bedrooms
            </span>
            <span>
              <i className="fa-solid fa-sink mr-3"></i>2 Bathrooms
            </span>
            <span className="">
              <i className="fa-solid fa-sink mr-3"></i>Furnished
            </span>
            <span>
              <i className="fa-solid fa-mountain mr-3"></i>3000 sqft. Area.
            </span>
            <span className="">&#8377;&nbsp;&nbsp;20,000 Rent</span>
            <span>&#8377;&nbsp;&nbsp;&nbsp;40,000 Deposit</span>
          </p>
          <Link href="/showproperty/636959ce807006ade15901d2-2999-sqft-2BHK-bhk-Independent%20Floor-on-rent-in-whitefield-Bengaluru">
            <button className="mt-3 w-full p-3 font-para  primary_button_without">
              View property <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePropertyCard;
