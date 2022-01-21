import React from 'react'
import "./Todo.css"
import { BsCircle } from 'react-icons/bs';
function Todo({ todo }) {
    return (
        <div key={todo.id} className='todo' >
            <div className='circle-check'>
                <BsCircle />
            </div>
            <div>
                <h1>{todo.task}</h1>
            </div>
        </div>
    )
}

export default Todo
