import { useState } from 'react'
import TodoItem from './Components/TodoItem'
import TodoForm from './Components/TodoForm'

const App = () => {
  
  const [todoItems, setTodoItems] = useState([])
  const [nameInput, setNameInput] = useState("")
  const [dateInput, setDateInput] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodoItems([...todoItems, { date: dateInput, name: nameInput }])
    setNameInput("")
    setDateInput("")
  }
  
  return (
      <div>
      <h1>To Do List</h1>
      <TodoForm 
        nameInput={nameInput}
        setNameInput={setNameInput}
        dateInput={dateInput}
        setDateInput={setDateInput}
        handleSubmit={handleSubmit}
      />

        {todoItems.map((todoItem)=> {
         return <TodoItem date={todoItem.date} name={todoItem.name}/>
        })}
    </div>
  )
}
export default App
