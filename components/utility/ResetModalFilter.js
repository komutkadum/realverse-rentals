import React from 'react';

function ResetModalFilter({ setValue, updateFilterAndSubmit }) {
  return (
    <button className="mt-2.5">
      <span
        className="custom_checkbox hover:bg-transparent hover:border-0 bg-transparent border-0 text-indigo-600 hover:text-indigo-900 underline underline-offset-2 text-sm"
        onClick={() => {
          setValue('');
          updateFilterAndSubmit();
        }}
      >
        reset
      </span>
    </button>
  );
}

export default ResetModalFilter;
