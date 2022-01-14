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
                id: Math.random().toString(36).substring(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    // DELETE TODO LIST
    function delet() {
        setTodos([]);
    };

    return (
        <div>
            <Todoform addTask={addTask} />
            {
                todos.map(
                    (todo) => {
                        return <Todo
                            todo={todo}
                            key={todo.id}
                        />
                    }
                )
            }
            <div className="text">
                <div className='words'>
                    <h1>Ümumi {todos.length} tapşırığ</h1>
                </div>
                <div onClick={delet} >
                    <h1>Hamisi silinsin</h1>
                </div>
            </div>
        </div>
    )
}

export default Todolist
