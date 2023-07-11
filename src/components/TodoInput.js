import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  // Define state for the input value using useState hook
  const [inputValue, setInputValue] = useState("");

  // Function to handle the add button click
  const handleClick = () => {
    if (inputValue !== '') {
      // Call the addTodo function and pass the inputValue as a parameter
      addTodo(inputValue);
      // Reset the input value to an empty string
      setInputValue("");
    } else {
      alert("Please write something!");
    }
  };

  return (
    <div id="myDIV" className="header">
      <h2>My To Do List</h2>
      {/* Input field to enter a task */}
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a task" />
      {/* Add button to add the task */}
      <span className="addBtn" onClick={handleClick}>Add</span>
    </div>
  );
};

export default TodoInput;

