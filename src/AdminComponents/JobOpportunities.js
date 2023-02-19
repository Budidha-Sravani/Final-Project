import React, { useState, useEffect } from 'react';

const JobOpportunities = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch the list of job opportunities from the server and set the state
    const fetchJobs = async () => {
      const response = await fetch('/api/admin/job-opportunities');
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  const handleDeleteJob = async (id) => {
    // Delete a job opportunity with the given id
    const response = await fetch(`/api/admin/job-opportunities/${id}`, { method: 'DELETE' });
    if (response.ok) {
      // Remove the deleted job opportunity from the state
      setJobs(jobs.filter((job) => job.id !== id));
    } else {
      console.error(`Failed to delete job opportunity with id ${id}`);
    }
  };

  return (
    <div>
      <h1>Job Opportunities List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td>{job.location}</td>
              <td>
                <button onClick={() => handleEditJob(job.id)}>Edit</button>
                <button onClick={() => handleDeleteJob(job.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobOpportunities;
