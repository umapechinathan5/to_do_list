import React, { useState } from "react";

const CreateToDo = ({todos,setTodos}) => {
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");

const addtodos = ()=>{
  if(title === ""){
    alert("title cannot be empty")
  }
  else
  setTodos([...todos,{
   title:title,
   id:Math.floor(Math.random()*1000),
   description:description,
   status:false
  }]);
  setTitle("");
  setDescription("");
}



  return (
    <div className="mb-5">
      <h3 className="text-light bg-dark text-center mb-5">My ToDo </h3>
      <div className="row justify-content-center">
        <input type="text" onChange = {(event)=>{setTitle(event.target.value)}} placeholder="Todo Name" className="col-md-3 mx-3" />
        <input type="text" onChange={(event)=>{setDescription(event.target.value)}}placeholder="Todo Description" className="col-md-3 mx-3" />
        <button onClick={()=>{
          addtodos()
        }} className="col-md-3 btn btn-success mx-3">Add ToDo</button>
      </div>
      </div>
  )
}

export default CreateToDo