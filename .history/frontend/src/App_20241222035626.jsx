import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { use } from 'react'
import { set } from 'zod'

function App() {

const [todos, setTodos] = useState([])
const [ todoValue , setTodoValue] = useState('')

function persistData (newList){
    localStorage.setItem('todos',JSON.stringify({
      todos : newList
    }))
}

function handleNewTodos (newTodo){
    const newTodoList = [...todos,newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
}

function handleDeleteTodo (index){
  const newTodoList = todos.filter((todos,todoIndex) => {
    return todoIndex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleEditTodo (index) {
  const valueTobeEdited = todos[index]
  setTodoValue(valueTobeEdited)
  handleDeleteTodo(index)
}

useEffect( () => {
  if(!localStorage) {
    return
  }
  let localTodos = localStorage.getItem('todos')

  if(!localTodos) {
    return
  }

  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)
}, [])
  return (
   <>
    <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} handleNewTodos = {handleNewTodos}></TodoInput>
    <TodoList handleEditTodo= {handleEditTodo} handleDeleteTodo= {handleDeleteTodo} todos = {todos}></TodoList>
   </>
  
  )
}

export default App
