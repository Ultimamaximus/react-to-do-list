import React from 'react';

const TodoItem = ({ todo, removeTodo, toggleChecked }) => {
  return (
    <li className={todo.checked ? 'checked' : ''} onClick={() => toggleChecked(todo.id)}>
      {todo.text}
      <span className="close" onClick={(e) => {e.stopPropagation(); removeTodo(todo.id);}}>&#215;</span>
    </li>
  );
};

export default TodoItem;
