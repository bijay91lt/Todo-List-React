import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({
  tasks,
  toggleComplete,
  deleteTask,
}: {
  tasks: { text: string; completed: boolean }[];
  toggleComplete: (index: number) => void;
  deleteTask: (index: number) => void;
}) {
  return (
    <ul className="space-y-3">
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
