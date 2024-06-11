import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todos/todoSlice';

const Todo = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
        onClick={() => dispatch(toggleTodo(id))}
      >
        {text}
      </span>
      <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
    </li>
  );
};

export default Todo;
