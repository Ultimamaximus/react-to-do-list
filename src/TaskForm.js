import React, { useState } from 'react';

const TaskForm = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleAddTask = () => {
      if (inputValue.trim() === '') {
        alert('Please write something!');
        return;
      }
  
      // Add your logic for adding the task here
  
      setInputValue('');
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    );
  };
  
  export default TaskForm;
  