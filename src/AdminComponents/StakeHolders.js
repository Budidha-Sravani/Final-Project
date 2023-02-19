import React, { useState, useEffect } from 'react';

const Stakeholders = () => {
  const [stakeholders, setStakeholders] = useState([]);

  useEffect(() => {
    // Fetch the list of stakeholders from the server and set the state
    const fetchStakeholders = async () => {
      const response = await fetch('/api/admin/stakeholders');
      const data = await response.json();
      setStakeholders(data);
    };
    fetchStakeholders();
  }, []);

  const handleDeleteStakeholder = async (id) => {
    // Delete a stakeholder with the given id
    const response = await fetch(`/api/admin/stakeholders/${id}`, { method: 'DELETE' });
    if (response.ok) {
      // Remove the deleted stakeholder from the state
      setStakeholders(stakeholders.filter((stakeholder) => stakeholder.id !== id));
    } else {
      console.error(`Failed to delete stakeholder with id ${id}`);
    }
  };

  return (
    <div>
      <h1>Stakeholders List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stakeholders.map((stakeholder) => (
            <tr key={stakeholder.id}>
              <td>{stakeholder.name}</td>
              <td>{stakeholder.email}</td>
              <td>{stakeholder.role}</td>
              <td>
                <button onClick={() => handleDeleteStakeholder(stakeholder.id)}>Edit</button>
                <button onClick={() => handleDeleteStakeholder(stakeholder.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stakeholders;
