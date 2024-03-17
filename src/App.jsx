import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CreateToDo from './Components/CreateToDo'
import Display from './Components/Display'

function App() {
const [todos,setTodos] = useState([
  {
    id:1,
    title:"task 1",
    description:"task 1 pending",
    status:false
  },
])
const handlestatuschange = (product,completion)=>{
    todos.map((todo)=>{
      if(product.id===todo.id){
      return {...todo,status:completion,
      };
 } 
   return todo;
})
}
const removetodo  = (id)=>{

const todelete = todos.filter((todo)=>{
    todo.id === id;
  })
const updatedtodos = todos.splice(todos.indexOf(todelete),1);
setTodos(updatedtodos);
}

  return (
  <>
  <CreateToDo todos={todos} setTodos={setTodos}/>
  <Display todos={todos} handlestatuschange={handlestatuschange} removetodo={removetodo}/>
  
  </>
  )
}

export default App
