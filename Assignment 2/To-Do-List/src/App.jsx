import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const filteredTasks = () => {
    if (filter === 'active') {
      return tasks.filter(task => !task.completed);
    } else if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks()}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;
