import React from 'react';

function Tele({ currentStep }) {
  const process = 'border-2  border-indigo-600';
  const complete = 'border-2 border-indigo-600 bg-indigo-600 text-white';
  const pending = 'border-2 border-gray-400';
  return (
    <>
      <div className="border-2  font-medium  border-gray-300   max-w-5xl mx-auto bg-white">
        <div className="flex col-span-4 border-r px-4 py-3 items-center gap-2">
          <div
            className={` p-5 ${complete} grid place-items-center relative  rounded-full`}
          >
            <span className="absolute">
              <i class="fa-solid fa-check"></i>
            </span>
          </div>
          <h1>Job Details</h1>
        </div>
        <div className="flex col-span-4 text-indigo-600 border-r px-4 py-3 items-center gap-2">
          <div
            className={` p-5 ${process} grid place-items-center relative  rounded-full`}
          >
            <span className="absolute">02</span>
          </div>
          <h1>Application Form</h1>
        </div>
        <div className="flex col-span-4 text-gray-500 border-r px-4 py-3 items-center gap-2">
          <div
            className={` p-5 ${pending} grid place-items-center relative  rounded-full`}
          >
            <span className="absolute">03</span>
          </div>
          <h1>Preview</h1>
        </div>
      </div>
    </>
  );
}

export default Tele;
