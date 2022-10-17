import React from 'react';

function UserForm({ firstName, lastName, age, updateFields }) {
  return (
    <div className="grid gap-y-2">
      <label>First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        autoFocus
        className="form"
        required
      />
      <label>Last Name</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
        required
        className="form"
      />
      <label>Age</label>
      <input
        required
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
        min={1}
        className="form"
        type="number"
      />
    </div>
  );
}

export default UserForm;
