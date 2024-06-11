// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import AddTodo from './components/AddTodo';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App with Redux</h1>
        <AddTodo />
        <Filters/>
        <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
