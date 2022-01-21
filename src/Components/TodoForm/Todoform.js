import React from 'react'
import "../TodoForm/TodoForm.css"
import { useState } from "react"
import { BsFillPlusSquareFill } from 'react-icons/bs';
function Todoform({ addTask }) {
    const [userInput, setUserInput] = useState("")

    // INPUT VALUE
    function inputHandler(e) {
        setUserInput(e.currentTarget.value)
    }

    // TODO-LIST ADD
    function submitHandler(e) {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    return (
        <div className='todoform' >
            <form className='form' onSubmit={submitHandler} >
                <div className='title'>
                    <h1>TODO</h1>
                </div>
                <div className='input-group'>
                    <input
                        value={userInput}
                        type="text"
                        onChange={inputHandler}
                        placeholder='Tapşırığı daxiı edin'
                    />
                    <button type='submit' ><BsFillPlusSquareFill /></button>
                </div>
            </form>
        </div>
    )
}

export default Todoform
