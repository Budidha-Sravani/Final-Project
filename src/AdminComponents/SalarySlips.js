import React, { useState } from 'react';

const SalarySlip = () => {
  const [employeeId, setEmployeeId] = useState('');

  const handleEmployeeIdChange = (event) => {
    setEmployeeId(event.target.value);
  };

  const handleDownloadSalarySlip = () => {
    // Download the salary slip for the selected employee
    window.location.href = `/api/admin/salarySlips/${employeeId}`;
  };

  return (
    <div>
      <h1>Salary Slips</h1>
      <div>
        <label htmlFor="employeeId">Employee ID:</label>
        <input type="text" id="employeeId" value={employeeId} onChange={handleEmployeeIdChange} />
      </div>
      <button onClick={handleDownloadSalarySlip}>Download Salary Slip</button>
    </div>
  );
};

export default SalarySlip;
