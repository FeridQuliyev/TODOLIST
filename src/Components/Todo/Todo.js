import React from 'react'
import "../Todo/Todo.css"
import {BsCircle} from 'react-icons/bs';
function Todo({ todo }) {
    return (
        <div  key={todo.id} className='todo' >
            <div className='list'>
                <p><BsCircle/></p>
            </div>
            <div className='list' >
               <h1>{todo.task}</h1>
            </div>
        </div>
    )
}

export default Todo
