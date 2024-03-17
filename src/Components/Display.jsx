import React, { useState } from 'react'
import Todo from './Todo'

const Display = ({todos,handlestatuschange,removetodo}) => {
const [filter,setFilter] = useState("all");
const handlefilterchange = (event)=>{
  setFilter(event.target.value);
}

  return (
    <>
    <div className='row mb-5 justify-content-center'>
      <h4 className='col-md-5 text-center'>My ToDos</h4>
      <div className='col-md-5 text-center'>
        <label For="display">Status Filter : </label>
        <select name="display" className='bg-secondary text-white text-center' onChange={handlefilterchange} id="display">
          <option value="all" selected> All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      </div>
      <div className='row justify-content-around'>

      {todos.map((todo)=>{
       switch (filter){
        case "all" :
          return <Todo todo={todo} key={todo.id} handlestatuschange={handlestatuschange} removetodo={removetodo}/>;
        
        case "completed" :
          if(todo.status){
            return <Todo todo={todo} key={todo.id} handlestatuschange={handlestatuschange} removetodo={removetodo}/>;
          }
          break;
        case "pending" :
          if(!todo.status){
            return <Todo todo={todo} key={todo.id} handlestatuschange={handlestatuschange} removetodo={removetodo}/>;
          }

          break;
          default:
            return null;
      
     } 
     return null;
     })}
     
   </div>
   </>  
  )
}

export default Display