import React from 'react';
import PropertyCard from '../cards/PropertyCard';

function Property() {
  return (
    <>
      <div>
        <div className="w-full mx-auto">
          {/* <!-- filters --> */}
          <div className="mx-4 py-2.5 font-header drop-shadow-lg">
            <button className="px-3 mr-2 py-1 dark_button ">
              Filter&nbsp;<i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
          {/* <!-- end of filters --> */}
          {/* <!-- left sidebar --> */}
          <div className="border-t  border-gray-400">
            <div className="border-r  border-gray-300 custom-sidebar grid gap-y-4 p-2 md:p-4 overflow-y-scroll">
              <h1 className="text-xl font-semibold font-header py-2">
                Apartments in Whitefield, Bengaluru.
              </h1>

              {/* <!-- start of the card -->        */}
              <PropertyCard />
              {/* <!-- end of the card --> */}
            </div>
            {/* <!-- end of left sidebar -->
              <!-- right sidebar --> */}
            <div className=" custom-map overflow-y-scroll  bg-no-repeat bg-cover bg-center">
              {/* <!-- map element --> */}
              <div className="mapouter">
                <div className="gmap_canvas" id="gmap">
                  <iframe
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                </div>
              </div>
              {/* <!-- end of map element --> */}
            </div>
          </div>
          {/* <!-- end of right sidebar --> */}
        </div>
      </div>
      {/* <Script id='hello' src='/static/map.js' onLoad={()=>myFunction()}/> */}
      {/* <Script id="my-script">{`document.getElementById('gmap')style.height = `${window.innerHeight - 119}px``}</Script> */}
    </>
  );
}

export default Property;
