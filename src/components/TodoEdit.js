import React, { useState } from 'react'

export const TodoEdit = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue('');
    }
    return (
        <form className='TodoForm' onSubmit={ handleSubmit }>
            <input type='text' className='todo-edit-input' value={value} placeholder='update task' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>update</button>
        </form>
    )
}