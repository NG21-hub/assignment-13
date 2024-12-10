import React from 'react';

const TodoItem = React.memo(({ task, onComplete, onDelete }) => {
  console.log("Rendering TodoItem:", task.text);

  return (
    <div className="todo-item">
      <span>{task.text}</span>
      <button onClick={() => onComplete(task.id)}>Complete</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
});

export default TodoItem;

  