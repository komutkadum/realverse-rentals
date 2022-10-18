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
        checked={value === id}
        onChange={(e) => updateFields({ [name]: e.target.value })}
      />
      <label htmlFor={id} className="custom_checkbox">
        {text}
      </label>
    </div>
  );
}

export default CustomRadio;
