import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const Filter = () => {
  const [filter, setFilter] = useState('all');
  const todos = useSelector((state) => state.todos.todos);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default Filter;
