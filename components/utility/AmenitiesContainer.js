import Image from 'next/image';
import React from 'react';

function AmenitiesContainer({ text, icon, name, value, updateCheckbox }) {
  return (
    <div>
      <input
        id={text}
        value={text}
        checked={value.indexOf(text) >= 0}
        onChange={(e) => updateCheckbox(e.target.value, name, text)}
        type="checkbox"
        className="peer hidden"
      />
      <label
        htmlFor={text}
        className="border cursor-pointer peer-checked:bg-indigo-600 hover:border-indigo-600 transition-colors duration-400 peer-checked:text-white border-gray-300 w-24 h-24 text-center p-4 flex flex-col gap-y-2 items-center justify-center text-xs"
      >
        <Image src={`/icons/${icon}.png`} width={24} height={24} alt={text} />
        <p>{text}</p>
      </label>
    </div>
  );
}

export default AmenitiesContainer;
