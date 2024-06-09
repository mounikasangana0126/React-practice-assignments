import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import useEmployees from '../hooks/useEmployees';
import useEditEmployee from '../hooks/useEditEmployee';
import useDeleteEmployee from '../hooks/useDeleteEmployee';

const EmployeeList = () => {
  const [employees, saveEmployees] = useEmployees();
  const editEmployee = useEditEmployee();
  const deleteEmployee = useDeleteEmployee();
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSaveEdit = (id, updatedEmployee) => {
    editEmployee(id, updatedEmployee);
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <div className="employee-list">
        {employees.map(employee => (
          <EmployeeCard
            key={employee.id}
            employee={employee} 
            onEdit={handleEdit}
            onDelete={deleteEmployee}
            isEditing={editingId === employee.id}
            onSaveEdit={handleSaveEdit}
            onCancelEdit={handleCancelEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
