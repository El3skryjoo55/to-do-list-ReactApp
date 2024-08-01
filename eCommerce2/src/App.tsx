import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState ([]);

  const inputRef = useRef();

  const handleAddToDo = () => {
    const text = inputRef.current.value;
    const newitem = 
    setTodos([...todos, text]);
    inputRef.current.value = '';
  }

  return (
    <>
      <div className="to-do-container">
      <h2>To do List</h2>
      <ul>
          {todos.map(({text, completed}, index) => {
            return <li key={index}>{text}</li>;
          })}
      </ul>
      <input ref={inputRef} placeholder='Enter item...'/>
      <button onClick={handleAddToDo}>Add</button>
      </div>
    </>
  )
}

export default App
