import React, { useState, useEffect } from 'react';

const SupportTeam = () => {
  const [supportTeam, setSupportTeam] = useState([]);

  useEffect(() => {
    // Fetch the list of support team members from the server and set the state
    const fetchSupportTeam = async () => {
      const response = await fetch('/api/admin/support-team');
      const data = await response.json();
      setSupportTeam(data);
    };
    fetchSupportTeam();
  }, []);

  const handleDeleteSupportTeamMember = async (id) => {
    // Delete a support team member with the given id
    const response = await fetch(`/api/admin/support-team/${id}`, { method: 'DELETE' });
    if (response.ok) {
      // Remove the deleted support team member from the state
      setSupportTeam(supportTeam.filter((member) => member.id !== id));
    } else {
      console.error(`Failed to delete support team member with id ${id}`);
    }
  };

  return (
    <div>
      <h1>Support Team List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {supportTeam.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>
                <button onClick={() => handleEditSupportTeamMember(member.id)}>Edit</button>
                <button onClick={() => handleDeleteSupportTeamMember(member.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupportTeam;
