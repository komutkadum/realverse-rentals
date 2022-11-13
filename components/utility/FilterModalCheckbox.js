import React from 'react';

function FilterModalCheckbox({
  id,
  text,
  value,
  setValue,
  dbValue,
  updateFilterAndSubmit,
}) {
  const insertItem = (targetValue) => {
    let temp = value;
    if (temp.indexOf(targetValue) < 0) temp.push(targetValue);
    else temp = temp.filter((item) => item !== targetValue);
    setValue([...temp]);
    console.log(value);
    updateFilterAndSubmit();
  };
  return (
    <div className="mt-2.5">
      <input
        type="checkbox"
        id={id}
        className="peer hidden"
        value={dbValue}
        checked={value.indexOf(dbValue) >= 0}
        onChange={(e) => insertItem(e.target.value)}
      />
      <label htmlFor={id} className="custom_checkbox">
        {text}
      </label>
    </div>
  );
}

export default FilterModalCheckbox;
