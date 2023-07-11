import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Master the backflip', checked: false },
    { id: 2, text: 'Pay rent', checked: false },
    { id: 3, text: 'Finish my to-do list app', checked: true },
    { id: 4, text: 'Buy "organic" eggs', checked: false },
    { id: 5, text: 'Read a book', checked: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { id: Math.random(), text, checked: false }];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleChecked = (id) => {
    const newTodos = todos.map((todo) => 
      todo.id === id ? {...todo, checked: !todo.checked} : todo
    );
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleChecked={toggleChecked} />
    </div>
  );
};

export default App;
