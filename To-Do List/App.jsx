import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("") // for managing the input space
  const [todos, setTodos] = useState([]) // Stores in local storage
  const [finished, setFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setFinished(!finished);
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()
  }
  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()
  }
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    saveToLS()
    setTodo("")
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];// not normal todos because reference remains same
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 p-5 min-h-[80vh] rounded-xl bg-gray-900 w-[95%] sm:w-[90%] md:w-1/2
">
        <h1 className='font-bold text-lg w-full text-center rounded bg-black text-purple-700'>iTask - Manage all your ToDos at one place</h1>
        <div className="addTodo my-2">
          <h2 className="text-lg text-purple-800 font-bold my-4">Add a to ToDo</h2>
          <div className="flex">
          <input onChange={handleChange} value={todo} type="text" className='w-full bg-gray-400 px-5 py-1 my-2 rounded' />
          <button onClick={handleAdd} disabled={todo.length <= 3} className='text-white my-2 rounded-lg px-3 text-sm font-bold py-1 bg-violet-800 hover:bg-violet-900 mx-3'>Save</button>
          </div>
        </div>
        <label className="flex items-center gap-2 text-gray-400 select-none">
          <input
            type="checkbox"
            onChange={toggleFinished}
            checked={finished}
          />
          Show finished
        </label>
        <div className="h-px bg-purple-900 mx-auto w-full opacity-65 my-2"></div>

        <h2 className="text-md my-4 text-purple-800 font-bold">Your ToDos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5 text-gray-400'>No todos to display here</div>}
          {
            todos.map(item => { // in the return statement logic, if finished is true show everything and if not show only those which are not completed
              return (finished || !item.isCompleted) && <div key={item.id} className="todo flex flex-col md:flex-row w-full my-2 gap-2 md:gap-0 md:justify-between">
                <div className='flex gap-5 flex-1 min-w-0'>
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                  <div
                    className={`break-all overflow-hidden text-gray-400 max-w-full ${item.isCompleted ? "line-through" : ""}`}
                  >
                    {item.todo}
                  </div>

                </div>
                <div className="buttons flex gap-2 mx-2 shrink-0 self-end md:self-center">
                  <button onClick={(e) => { handleEdit(e, item.id) }} className='text-white rounded-lg px-2 text-sm font-bold mx-1 py-1 bg-violet-800 hover:bg-violet-600'><FaEdit /></button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className='text-white  rounded-lg px-2 text-sm font-bold mx-1 py-1 bg-violet-800 hover:bg-violet-600'><MdDelete /></button>
                </div>
              </div>
            })}
        </div>
      </div>
    </>
  )
}

export default App