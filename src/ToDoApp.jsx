import React, { useState } from 'react';
import './App.css';

function TodoApp() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

    const handleAddTask = () => {
    if (task !== '') {
      setTodoList([...todoList, task]);
      setTask('');
    }
  };

  const handleCompleteTask = (index) => {
    const newTodoList = [...todoList];
    const taskToMove = newTodoList.splice(index, 1)[0];
    setTodoList(newTodoList);
    setCompletedList([...completedList, taskToMove]);
  };

  const handleDeleteTask = (index) => {
    const newCompletedList = [...completedList];
    newCompletedList.splice(index, 1);
    setCompletedList(newCompletedList);
  };

  const handleMoveBackToTodo = (index) => {
    const newCompletedList = [...completedList];
    const taskToMoveBack = newCompletedList.splice(index, 1)[0];
    setCompletedList(newCompletedList);
    setTodoList([...todoList, taskToMoveBack]);
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="todo-column">
        <h2>To-Do</h2>
        <ul>
          {todoList.map((task, index) => (
            <li key={index}>
              {task} 
              <button onClick={() => handleCompleteTask(index)}>Complete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="completed-column">
        <h2>Completed</h2>
        <ul>
          {completedList.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
              <button onClick={() => handleMoveBackToTodo(index)}>Move back</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
