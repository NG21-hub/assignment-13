import React, { useState, useCallback } from 'react';
import TodoItem from './ToDoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
  ]);

  const handleComplete = useCallback((id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            task={todo} 
            onComplete={handleComplete} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
