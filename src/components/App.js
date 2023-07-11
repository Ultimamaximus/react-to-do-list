import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import './App.css';

const App = () => {
  // Define state for todos using useState hook
  const [todos, setTodos] = useState([
    { id: 1, text: 'Master the backflip', checked: false },
    { id: 2, text: 'Pay rent', checked: false },
    { id: 3, text: 'Finish my to-do list app', checked: true },
    { id: 4, text: 'Buy "organic" eggs', checked: false },
    { id: 5, text: 'Read a book', checked: false },
  ]);

  // Function to add a new todo item
  const addTodo = (text) => {
    // Create a new todo object with a unique id and the provided text
    const newTodos = [...todos, { id: Math.random(), text, checked: false }];
    // Update the todos state with the new todo item
    setTodos(newTodos);
  };

  // Function to remove a todo item
  const removeTodo = (id) => {
    // Filter out the todo item with the provided id
    const newTodos = todos.filter((todo) => todo.id !== id);
    // Update the todos state without the removed todo item
    setTodos(newTodos);
  };

  // Function to toggle the checked status of a todo item
  const toggleChecked = (id) => {
    // Map over the todos array and toggle the checked status of the todo item with the provided id
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    // Update the todos state with the modified todo item
    setTodos(newTodos);
  };

  return (
    <div>
      {/* Render the TodoInput component and pass the addTodo function as a prop */}
      <TodoInput addTodo={addTodo} />
      {/* Render the TodoList component and pass the todos, removeTodo, and toggleChecked functions as props */}
      <TodoList todos={todos} removeTodo={removeTodo} toggleChecked={toggleChecked} />
    </div>
  );
};

export default App;
