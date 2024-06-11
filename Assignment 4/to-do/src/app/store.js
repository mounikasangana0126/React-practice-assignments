// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
