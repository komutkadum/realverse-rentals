import React from 'react';

function AccountForm({ email, password, updateFields }) {
  return (
    <div className="grid gap-y-2">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        className="form"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        className="form"
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </div>
  );
}

export default AccountForm;
