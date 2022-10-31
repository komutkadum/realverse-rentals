import React from 'react';
import BorderTransform from './BorderTransform';

function WhyUseCard({ icon, title, text }) {
  return (
    <>
      <div className="relative group duration-300 block hover:scale-105 transition-all cursor-pointer">
        <BorderTransform color="bg-indigo-600" />
        <div className="p-4">
          <dt>
            <div className="absolute flex h-12 w-12 items-center justify-center bg-indigo-600 text-white">
              <i className={`${icon}`}></i>
            </div>
            <p className="ml-16 text-lg font-semibold leading-6 font-header ">
              {title}{' '}
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base ">{text}</dd>
        </div>
      </div>
    </>
  );
}

export default WhyUseCard;
