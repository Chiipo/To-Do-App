import { useState } from 'react'
import TodoItem from './Components/TodoItem'
import TodoForm from './Components/TodoForm'

const App = () => {
  const [todoItems, setTodoItems] = useState([])
  const [nameInput, setNameInput] = useState("")
  const [dateInput, setDateInput] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoItems([...todoItems, { date: dateInput, name: nameInput }])
    setNameInput("")
    setDateInput("")
  };
  
  return (

    <div>
      <h1>To do List</h1>
      <TodoForm 
        nameInput={nameInput}
        setNameInputProp={setNameInput}
        dateInput={dateInput}
        setDateInputProp={setDateInput}
        handleSubmit={handleSubmit}
      />

        {todoItems.map((todoItem, index) => {
         return  <TodoItem  key={index} date={todoItem.date} name={todoItem.name}/>
        })}
    </div>
  )
}
export default App
