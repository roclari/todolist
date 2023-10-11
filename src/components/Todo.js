import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task, toggleComplete, todoDelete, todoEdit}) => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className='Todo'>
            <p className={`${task.completed ? 'completed' : ''}`}>{ task.task }</p>
            <div>
                <FontAwesomeIcon className={`complete-icon ${task.completed ? 'completed' : ''} ${clicked ? 'clicked' : ''}`}  
                icon={faCheck} onClick={() => {toggleComplete(task.id); setClicked(true)}} />
                <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={() => todoEdit(task.id)} />
                <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={() => todoDelete(task.id)} />
            </div>
        </div>
    )
}