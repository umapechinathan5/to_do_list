import React, { useState } from 'react'

const Todo = ({todo,handlestatuschange,removetodo}) => {
const [completed, setcompleted] = useState(false);

  return (
    <div className="card text-white bg-primary mb-3 col-md-4" style = {{maxWidth : "18rem"}}>
  <div className="card-header">{todo.title}</div>
  <div className="card-body">
    <h5 className="card-title">{todo.description}</h5>
    <div>
        <label For="status">Status : </label>
        <select name="status" id="status" onChange={(e)=>{setcompleted(e.target.value);
        handlestatuschange(todo,completed)}}>
        <option value="false" selected>Pending</option>
        <option value="true">Completed</option>
        </select>
      </div>
  </div>
  <div className='card-footer'>
    <button className='btn btn-success'>Edit</button>
    <button className='btn btn-danger' onClick={()=>{removetodo(todo.id)}}>Delete</button>
    
  </div>
</div>
  )
}

export default Todo