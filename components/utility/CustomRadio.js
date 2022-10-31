import React from 'react';

function CustomRadio({ id, name, text, value, updateFields }) {
  return (
    <div className="mt-2.5">
      <input
        type="radio"
        value={id}
        id={id}
        className="peer hidden"
        name={name}
        checked={value === text}
        onChange={(e) => updateFields({ [name]: text })}
      />
      <label htmlFor={id} className="custom_checkbox">
        {text}
      </label>
    </div>
  );
}

export default CustomRadio;
