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
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Job Title: {employee.jobTitle}</p>
      <p>Salary: {employee.salary}</p>
      <p>Project Name: {employee.projectName}</p>
      <p>Reporting Manager: {employee.reportingManager}</p>
    </div>
  );
};

export default EmployeeDetails;
