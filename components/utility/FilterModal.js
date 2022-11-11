import React, { useEffect } from 'react';
import Checkbox from './Checkbox';

function FilterModal({ modal, setModal }) {
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target == document.getElementById('filterModal')) {
        setModal(false);
      }
    });
    return () => {
      window.removeEventListener('click', () => {});
    };
  }, []);
  return (
    <div
      id="filterModal"
      tabIndex="-1"
      className={`${
        !modal && 'hidden'
      }  z-40 bg-white  overflow-y-auto overflow-x-hidden top-0 fixed grid place-items-center inset-0 h-screen w-screen`}
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative grid place-items-center gap-y-6 py-10 bg-white rounded-lg shadow-2xl animate__animated animate__bounceIn ">
          <button
            className="absolute text-lg top-2 cursor-pointer right-4 w-8 text-white rounded-full h-8 bg-red-500 grid place-items-center hover:bg-red-600 active:bg-red-500 duration-200"
            onClick={() => setModal(false)}
          >
            x
          </button>
          <div>
            <label className="font-semibold">Balcony </label>
            <div className="flex flex-wrap gap-2 mt-1 tracking-wider font-semibold">
              <Checkbox id="hel" name="lsjdf" value="lsjdfsf" text="sldfj" />
              <Checkbox id="hel" name="lsjdf" value="lsjdfsf" text="sldfj" />
              <Checkbox id="hel" name="lsjdf" value="lsjdfsf" text="sldfj" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
