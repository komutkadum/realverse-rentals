import React from 'react';

function FilterModalRadio({
  id,
  name,
  value,
  dbValue,
  text,
  setValue,
  updateFilterAndSubmit,
}) {
  return (
    <div className="mt-2.5">
      <input
        type="radio"
        value={dbValue}
        id={id}
        className="peer hidden"
        name={name}
        checked={value === dbValue}
        onChange={(e) => {
          setValue(e.target.value);
          updateFilterAndSubmit();
        }}
      />
      <label htmlFor={id} className="custom_checkbox">
        {text}
      </label>
    </div>
  );
}

export default FilterModalRadio;
