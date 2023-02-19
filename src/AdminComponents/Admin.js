import React, { useState } from 'react';

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Add login logic here
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Admin Panel</h1>
          <ul>
            <li>
              <button>Edit Employees</button>
            </li>
            <li>
              <button>Delete Employees</button>
            </li>
            <li>
              <button>Edit Stakeholders</button>
            </li>
            <li>
              <button>Delete Stakeholders</button>
            </li>
            <li>
              <button>Edit Job Opportunities</button>
            </li>
            <li>
              <button>Delete Job Opportunities</button>
            </li>
            <li>
              <button>Edit Support Team</button>
            </li>
            <li>
              <button>Delete Support Team</button>
            </li>
            <li>
              <button>Edit Products</button>
            </li>
            <li>
              <button>Delete Products</button>
            </li>
            <li>
              <button>Edit Notifications</button>
            </li>
            <li>
              <button>Delete Notifications</button>
            </li>
            <li>
              <button>Edit Salary Slips</button>
            </li>
            <li>
              <button>Delete Salary Slips</button>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input type="text" />
            </label>
            <label>
              Password:
              <input type="password" />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admin;
