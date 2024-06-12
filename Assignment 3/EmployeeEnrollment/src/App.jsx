import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterEmployee from './components/RegisterEmployee';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import './App.css';
import IndividualDetail from './components/IndividualDetail';
 
const App = () => {
  const [employees, setEmployees] = useState([
  ]);

  const addEmployee = (employee) => {
    const newEmployee = { ...employee, id: employees.length + 1 };
    setEmployees([...employees, newEmployee]);
  };
 
  return (
    <div className="app">
      <nav className="sidebar">
        <ul>
          <li><Link to="/">Register Employee</Link></li>
          <li><Link to="/employees">Employee List</Link></li>
          <li><Link to="/employee-details">Employee Details</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<RegisterEmployee addEmployee={addEmployee} />} />
          <Route path="/employees" element={<EmployeeList employees={employees} />} />
          <Route path="/employee-details" element={<EmployeeDetails employees={employees} />} />
          <Route path="/employee-details/:id" element={<IndividualDetail employees={employees}/>} />
        </Routes>
      </main>
    </div> 
  );
}; 

export default App;
