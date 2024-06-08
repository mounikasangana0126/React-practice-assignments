import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employee-details/${employee.id}`}>
              {employee.name} - {employee.jobTitle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
