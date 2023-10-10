import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task, toggleComplete, todoDelete, todoEdit}) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{ task.task }</p>
            <div>
                <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={() => todoEdit(task.id)} />
                <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={() => todoDelete(task.id)} />
            </div>
        </div>
    )
}