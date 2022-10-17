import Image from 'next/image';
import React from 'react';

function AmenitiesContainer({ text, icon }) {
  return (
    <div>
      <input id={text} type="checkbox" className="peer hidden" />
      <label
        htmlFor={text}
        className="border-2 cursor-pointer peer-checked:bg-indigo-600 peer-checked:text-white border-gray-300 w-24 h-24 text-center p-4 flex flex-col gap-y-2 items-center justify-center text-xs"
      >
        <Image src={`/icons/${icon}.png`} width={24} height={24} alt={text} />
        {/* <i className={`text-base ${icon}`}></i> */}
        <p>{text}</p>
      </label>
    </div>
  );
}

export default AmenitiesContainer;
