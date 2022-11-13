import React from 'react';

function FilterCheckboxContainer({ children, text, edited }) {
  return (
    <div className="px-3 mr-2 my-1 py-1.5  primary_button_gray inline-block group relative cursor-pointer">
      {text}
      {edited && (
        <i
          className="fa-solid fa-circle absolute left-0.5 text-indigo-600 "
          style={{ fontSize: '7px' }}
        ></i>
      )}
      <i className="fa-solid fa-angle-down group-hover:rotate-180 duration-500 ml-0.5"></i>
      <div className="hidden absolute text-center top-8 left-0 w-full z-30 bg-white shadow-2xl p-px group-hover:block animate__animated animate__fadeIn">
        {children}
      </div>
    </div>
  );
}

export default FilterCheckboxContainer;
