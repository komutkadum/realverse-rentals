import React from 'react';

function FilterCheckboxContainer({ children, text }) {
  return (
    <div className="px-3 mr-2 my-1 py-1.5  primary_button_gray inline-block group relative cursor-pointer">
      {text} <i className="fa-solid fa-angle-down"></i>
      <div className="hidden absolute text-center top-8 left-0 w-full z-30 bg-white shadow-2xl p-px group-hover:block animate__animated animate__bounceIn">
        {children}
      </div>
    </div>
  );
}

export default FilterCheckboxContainer;
