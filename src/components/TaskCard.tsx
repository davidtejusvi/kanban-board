import React, { useState } from 'react';
import { Task, tasks } from '../data/data-tasks';

import './taskCard.css';

const TaskCard = ({ task }: {
    task: Task
}) => {
    // const [data, setData] = useState(task);
    // console.log(data)
    return (
        <div>
            <div className="column-header">{task.title}</div>
            <div className="task" key={task.id}>
                <div>Id-{task.id}</div>
                <div>Status-{task.status}</div>
                <div>points-{task.points}</div>
            </div>
        </div>
    )
}

export default TaskCard