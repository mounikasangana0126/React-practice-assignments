import React from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetails = ({ employees }) => {
  const { id } = useParams();
  const employee = employees.find(emp => emp.id === parseInt(id));

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
      <p><strong>Job Title:</strong> {employee.jobTitle}</p>
      <p><strong>Salary:</strong> {employee.salary}</p>
      <p><strong>Project Name:</strong> {employee.projectName}</p>
      <p><strong>Reporting Manager:</strong> {employee.reportingManager}</p>
    </div>
  );
};

export default EmployeeDetails;
