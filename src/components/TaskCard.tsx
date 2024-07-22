import React, { useState } from 'react';
import { Task, tasks } from '../data/data-tasks';

import './taskCard.css';
interface TaskCardProps {
    task: Task;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, task: Task) => void;
    draggable: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDragStart, draggable }) => {
    return (
        <div
            draggable={draggable}
            onDragStart={(e) => onDragStart(e, task)}
        >
            <div className="column-header">{task.title}</div>
            <div className="task" key={task.id}>
                <div>
                    <div className='id'>
                        <div className='taskId'>ID</div>
                        <div>{task.id}</div>
                    </div>
                    <div className='status'>
                        <div className='taskStatus'>STATUS</div>
                        <div>{task.status}</div>
                    </div>
                    <div className='priority'>
                        <div className='taskPriority'>PRIORITY</div>
                        {task.priority === 'low' && <div className='low'>{task.priority}</div>}
                        {task.priority === 'medium' && <div className='medium'>{task.priority}</div>}
                        {task.priority === 'high' && <div className='high'>{task.priority}</div>}
                    </div>
                    <div>Points - {task.points}</div>
                </div>
            </div>
        </div >
    )
}

export default TaskCard;