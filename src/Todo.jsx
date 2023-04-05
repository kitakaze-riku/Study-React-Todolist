import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
    const toggleTodoClick = () => {
        toggleTodo(todo.id);
    };
    return (
        <>
            <label>
                <input type="checkbox" checked={todo.completed} readOnly onChange={toggleTodoClick} />
                {todo.name}
            </label>
            <br/>
        </>
    )
}

export default Todo