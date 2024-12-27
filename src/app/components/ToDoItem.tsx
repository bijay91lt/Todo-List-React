import React from 'react';

function ToDoItem({
  task,
  index,
  toggleComplete,
  deleteTask,
}: {
  task: { text: string; completed: boolean };
  index: number;
  toggleComplete: (index: number) => void;
  deleteTask: (index: number) => void;
}) {
  return (
    <li className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
      <span
        onClick={() => toggleComplete(index)}
        className={`cursor-pointer ${
          task.completed ? 'line-through text-gray-500' : 'text-black'
        }`}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(index)}
        className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
