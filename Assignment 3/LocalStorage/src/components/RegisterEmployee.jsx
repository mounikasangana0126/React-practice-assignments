import React, { useState } from 'react';

const RegisterEmployee = ({ addEmployee }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    salary: '',
    projectName: '',
    reportingManager: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(form);
    setForm({
      name: '',
      email: '',
      phone: '',
      jobTitle: '',
      salary: '',
      projectName: '',
      reportingManager: '',
    });
  };

  return (
    <div>
      <h2>Register Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={form.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Job Title:</label>
          <input type="text" name="jobTitle" value={form.jobTitle} onChange={handleChange} required />
        </div>
        <div>
          <label>Salary:</label>
          <input type="text" name="salary" value={form.salary} onChange={handleChange} required />
        </div>
        <div>
          <label>Project Name:</label>
          <input type="text" name="projectName" value={form.projectName} onChange={handleChange} required />
        </div>
        <div>
          <label>Reporting Manager:</label>
          <input type="text" name="reportingManager" value={form.reportingManager} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterEmployee;
