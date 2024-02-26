import { useState } from "react"

const TodoForm = ({ 
handleSubmit,
}) => {

  const [dateInput, setDateInput] = useState("");
  const [todoInput, setTodoInput] = useState("");

return (
  <form onSubmit={handleSubmit}>
    <label>
        Enter the date & day:
      <input 
        type="text"
        value={dateInput}
        onChange={(event) => setDateInput(event.target.value)}
      />

    </label>
    <label>
      Enter what you will do:
      <input
        type="text"
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      />
    </label>
        <input type="submit" />
  </form>
    )
}

export default TodoForm