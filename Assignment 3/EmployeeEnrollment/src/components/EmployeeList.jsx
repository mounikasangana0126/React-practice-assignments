import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const EmployeeList = ({ employees }) => {
  return (
    <div className='list'>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employee-details/${employee.id}`}   >
              {employee.name} - {employee.position}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
