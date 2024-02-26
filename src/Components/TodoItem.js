const TodoItem = ({ date, todoitem }) => {
  return (
     <div>
      <h2>{date}</h2>
      <p>{todoitem}</p>
      <button>delete</button>
     </div> 
  )
}

export default TodoItem