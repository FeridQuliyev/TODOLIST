import React from 'react'
import "../Todolist/Todolist.css"
import { useState } from 'react'
import Todoform from '../TodoForm/Todoform'
import Todo from "../Todo/Todo"
function Todolist() {
    const [todos, setTodos] = useState([])

    function addTask(userInput) {
        if (userInput) {
            const newItem = {
                task: userInput,
            }
            setTodos([...todos, newItem])
        }
    }

    // DELETE TODO LIST
    function delet() {
        setTodos([]);
    };

    return (
        <>
            <Todoform addTask={addTask} />
            <div className='task-list-container'>
                <div className='task-list'>
                    <div className='tasks'>
                        {
                            todos.map(todo => (<Todo todo={todo} key={todo.id} />))
                        }
                    </div>
                    <div className="task-footer">
                        <div>
                            Ümumi {todos.length} tapşırığ
                        </div>
                        <div onClick={delet} >
                            Hamisi silinsin
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todolist
