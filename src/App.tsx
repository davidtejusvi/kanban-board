import { useState } from 'react';
import TaskCard from './components/TaskCard';
import { Task, tasks } from './data/data-tasks';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const todoTask = tasks.filter((task) => task.status === 'todo');
  const inProgress = tasks.filter((task) => task.status === 'in-progress');
  const Completed = tasks.filter((task) => task.status === 'done');

  return (
    <>
      <div className='board'>
        <div className='column'>
          <h1>ToDo</h1>
          {
            todoTask.map((task) => <TaskCard task={task} />)
          }
        </div>
        <div className='column'>
          <h1>In-progress</h1>
          {
            inProgress.map((task) => <TaskCard task={task} />)
          }
        </div>
        <div className='column'>
          <h1>Completed</h1>
          {
            Completed.map((task) => <TaskCard task={task} />)
          }
        </div>
      </div>

    </>
  )
}

export default App
