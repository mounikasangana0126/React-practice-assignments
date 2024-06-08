import React from 'react';
import { useParams } from 'react-router-dom';

const IndividualDetail = ({ employees }) => {
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
      <p>Position: {employee.position}</p>
    </div>
  );
};

export default IndividualDetail;
