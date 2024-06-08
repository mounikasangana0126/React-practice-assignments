import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'


const EmployeeDetails = ({ employees }) => {

  if (!employees) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
        <h2>Employee Details</h2>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
            </tr>
        {employees.map(data=>(
            // <div>
            // <p>ID: {data.id}</p>
            // <p>Name: {data.name}</p>
            // <p>Email: {data.email}</p>
            // <p>Position: {data.position}</p>
            // </div>
            <tr>
                <td>{data.id}.</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.position}</td>
            </tr>
            
        ))}
        </table>
    </div>
  ); 
};

export default EmployeeDetails;
