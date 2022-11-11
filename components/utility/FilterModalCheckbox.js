import React from 'react';

function FilterModalCheckbox({ id, text }) {
  return (
    <div className="mt-2.5">
      <input type="checkbox" value={id} id={id} className="peer hidden" />
      <label htmlFor={id} className="custom_checkbox">
        {text}
      </label>
    </div>
  );
}

export default FilterModalCheckbox;
