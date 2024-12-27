// src/app/page.tsx
'use client'
import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

export default function Page() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task: string) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleComplete = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}
