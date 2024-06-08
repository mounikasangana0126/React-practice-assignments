import { useCallback } from 'react';
import useEmployees from './useEmployees';

const useEditEmployee = () => {
  const [employees, saveEmployees] = useEmployees();

  const editEmployee = useCallback((id, updatedEmployee) => {
    const updatedEmployees = employees.map(employee =>
      employee.id === id ? { ...employee, ...updatedEmployee } : employee
    );
    saveEmployees(updatedEmployees);
  }, [employees, saveEmployees]);

  return editEmployee;
};

export default useEditEmployee;
