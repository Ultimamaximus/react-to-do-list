import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if(inputValue !== '') {
      addTodo(inputValue);
      setInputValue("");
    } else {
      alert("Please write something!");
    }
  };

  return (
    <div id="myDIV" className="header">
      <h2>My To Do List</h2>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a task" />
      <span className="addBtn" onClick={handleClick}>Add</span>
    </div>
  );
};

export default TodoInput;
