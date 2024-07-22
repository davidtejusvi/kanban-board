import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='board'>
        <div className='column'>
          <div className="column-header">To Do</div>
          <div className="task">Task 1</div>
          <div className="task">Task 2</div>
        </div>
        <div className='column'>
          <div className="column-header">In Progress</div>
          <div className="task">Task 3</div>
        </div>
        <div className='column'>
          <div className="column-header">Done</div>
          <div className="task">Task 4</div>
        </div>
      </div>

    </>
  )
}

export default App
