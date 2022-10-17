import React from 'react';

function AddressForm({ street, city, state, zip, updateFields }) {
  return (
    <div className="grid gap-y-2">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        className="form"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        className="form"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <input
        required
        type="text"
        className="form"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label>Zip</label>
      <input
        required
        type="text"
        className="form"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </div>
  );
}

export default AddressForm;
