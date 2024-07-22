import React, { useState } from 'react';
import TaskCard from './components/TaskCard';
import { Task, tasks } from './data/data-tasks';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState(tasks);

  const todoTasks = taskList.filter((task) => task.status === 'todo');
  const inProgressTasks = taskList.filter((task) => task.status === 'in-progress');
  const completedTasks = taskList.filter((task) => task.status === 'done');

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, status } : task
    );
    setTaskList(updatedTasks);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, task: Task) => {
    e.dataTransfer.setData('taskId', task.id);
  };

  return (
    <>
      <div className='board'>
        <div className='column'
          onDrop={(e) => handleDrop(e, 'todo')}
          onDragOver={(e) => e.preventDefault()}
        >
          <h1>ToDo</h1>
          {todoTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDragStart={(e: any) => handleDragStart(e, task)}
              draggable
            />
          ))}
        </div>
        <div className='column'
          onDrop={(e) => handleDrop(e, 'in-progress')}
          onDragOver={(e) => e.preventDefault()}
        >
          <h1>In-progress</h1>
          {inProgressTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDragStart={(e) => handleDragStart(e, task)}
              draggable
            />
          ))}
        </div>
        <div className='column'
          onDrop={(e) => handleDrop(e, 'done')}
          onDragOver={(e) => e.preventDefault()}
        >
          <h1>Completed</h1>
          {completedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDragStart={(e) => handleDragStart(e, task)}
              draggable
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
