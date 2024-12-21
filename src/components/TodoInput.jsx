import react, { useState } from "react";

export default function TodoInput (props){
    const {handleNewTodos , todoValue ,setTodoValue} = props
    
    return (
    <header>
        <input value = {todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }} placeholder="Enter Todos ..." ></input>
        <button onClick={() => {
            handleNewTodos(todoValue)
            setTodoValue('')
        }}>Add</button>
    </header>
    )
}