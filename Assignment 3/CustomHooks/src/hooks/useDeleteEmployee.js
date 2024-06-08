import { useCallback } from 'react';
import useEmployees from './useEmployees';

const useDeleteEmployee = () => {
  const [employees, saveEmployees] = useEmployees();

  const deleteEmployee = useCallback((id) => {
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    saveEmployees(updatedEmployees);
  }, [employees, saveEmployees]);

  return deleteEmployee;
};

export default useDeleteEmployee;
