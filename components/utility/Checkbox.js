import React from 'react';

function Checkbox({ id, name, text }) {
  return (
    <div>
      <input type="radio" id={id} className="peer hidden" name={name} />
      <label htmlFor={id} className="custom_checkbox">
        {text}
      </label>
    </div>
  );
}

export default Checkbox;
