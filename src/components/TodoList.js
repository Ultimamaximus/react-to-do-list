// TodoList component
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, toggleChecked }) => {
  return (
    <ul id="myUL">
      {/* Map over the todos array and render TodoItem component for each todo */}
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleChecked={toggleChecked} />
      ))}
    </ul>
  );
};

export default TodoList;
