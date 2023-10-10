import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { TodoEdit } from './TodoEdit'


export const TodoWrapper = () => {
    const [todoItem, setTodoItem] = useState([])
    const [nextId, setNextId] = useState(1);
    
    const addTodo = todo => {
        setTodoItem([...todoItem, {id: nextId, task: todo, completed: false, isEditing: false}])
        setNextId(nextId + 1);
    }

    const toggleComplete = id => {
        setTodoItem(todoItem.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const todoDelete = id => {
        setTodoItem(todoItem.filter(todo => todo.id !== id))
    }

    const todoEdit = id => {
        setTodoItem(todoItem.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodoItem(todoItem.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    return (
        <div className='TodoWrapper'>
            <h1>Add your next task</h1>
            <TodoForm addTodo={addTodo} />
            {todoItem.map((todo, index) => (
                todo.isEditing ? (
                    <TodoEdit editTodo={editTask} task={todo} key={`edit-${todo.id}`} />
                ) : (
                <Todo task={todo} key={`task-${todo.id}`} toggleComplete={toggleComplete} todoDelete={todoDelete} todoEdit={todoEdit} />
            )))}
        </div>
    )
}