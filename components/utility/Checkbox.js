import React from 'react';

function Checkbox({ text, id, name, value, updateCheckbox }) {
  return (
    <div className="mt-2.5">
      <input
        type="checkbox"
        value={id}
        checked={value.indexOf(id) >= 0}
        onChange={(e) => updateCheckbox(e.target.value, name, id)}
        id={id}
        className="peer hidden"
      />
      <label htmlFor={id} className="custom_checkbox">
        {text}
      </label>
    </div>
  );
}

export default Checkbox;
