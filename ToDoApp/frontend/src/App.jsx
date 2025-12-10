import React, { useState } from 'react'

function App() {
  const [input,setInput]=useState("")
  const [tasks,setTasks]=useState([])
  const [editInput,setEditInput]=useState("")
  const [edit,setEdit]=useState(null)
  const addTask=(e)=>{
    e.preventDefault();
    if(input.trim()==="") return;
    setTasks([
      ...tasks,
      {id:Date.now(),text:input,completed:false},
    ]);
    setInput("");
  };
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id !==id));
  }
  const toggleStatus=(id)=>{
    setTasks(
      tasks.map((task)=>task.id==id ? {...task,completed:!task.completed} :task )
    );
  };
  const editTask=(id)=>{
    setTasks(
    tasks.map((task)=>task.id===id?{...task,text:editInput}:task)
    )
    setEditInput("");
    setEdit(null);
  }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">ToDo App</h1>
      <form onSubmit={addTask} className="flex gap-2 mb-6">
    <input 
      type="text" 
      placeholder="Enter the task" 
      value={input} 
      onChange={(e)=>setInput(e.target.value)} 
      className="grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
    />
    <button 
      type="submit" 
      className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 ease-in-out shadow-md"
    >
      Add Task
    </button>
  </form>
      <hr className="border-t border-gray-200 mb-6" />
      <ul>
        {tasks.length===0 ? (
          <p className="text-gray-500 text-center italic">No task yet.</p>
        ) : (
          tasks.map((task)=>(
            <li key={task.id} className="flex items-center justify-between p-3 mb-2 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition duration-100 ease-in-out" >
            <div className="flex items-center grow">
              <input type="checkbox" checked={task.completed} onChange={()=>toggleStatus(task.id)} className="mr-3 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              {edit===task.id ? (
              <input value={editInput} onChange={(e)=>setEditInput(e.target.value)} className="grow p-1 border border-blue-400 rounded-md focus:outline-none" />
              ) :(
                <span className={`text-gray-700 grow ${task.completed ? 'line-through text-gray-500' : ''}`}> {task.text} </span>
              )}
              </div>
            <div className="flex gap-2 ml-4">
              {edit==task.id ?(
                <button onClick={()=> editTask(task.id)} className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600 transition duration-150 ease-in-out" >Save</button>
              ) :(
                <button onClick={()=>{
                  setEdit(task.id);
                  setEditInput(task.text)
                }} 
                className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600 transition duration-150 ease-in-out"> 
                Edit</button>
              )}
              <button onClick={()=> deleteTask(task.id)} className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition duration-150 ease-in-out" >
                Delete</button>
              </div>
            </li>
          ))
        )
        }
      </ul>
    </div>
  )
}

export default App
