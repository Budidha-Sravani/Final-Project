import React, { useState, useEffect } from 'react';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the list of employees from the server and set the state
    const fetchEmployees = async () => {
      const response = await fetch('/api/admin/employees');
      const data = await response.json();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  const handleDeleteEmployee = async (id) => {
    // Delete an employee with the given id
    const response = await fetch(`/api/admin/employees/${id}`, { method: 'DELETE' });
    if (response.ok) {
      // Remove the deleted employee from the state
      setEmployees(employees.filter((employee) => employee.id !== id));
    } else {
      console.error(`Failed to delete employee with id ${id}`);
    }
  };

  return (
    <div>
      <h1>Employee List</h1>
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
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
              <td>
                <button onClick={() => handleEditEmployee(employee.id)}>Edit</button>
                <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
