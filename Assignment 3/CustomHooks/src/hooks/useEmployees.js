import { useState, useEffect } from 'react';

const useEmployees = () => {
  
  const [employees, setEmployees] = useState(() => {
    const storedEmployees = localStorage.getItem('employees');
    return storedEmployees ? JSON.parse(storedEmployees) : [];
  });
  const saveEmployees = (newEmployees) => {
    setEmployees(newEmployees);
    localStorage.setItem('employees', JSON.stringify(newEmployees));
  };

  return [employees, saveEmployees];
};

export default useEmployees;
