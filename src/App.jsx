import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateToDo from "./Components/CreateToDo";
import Display from "./Components/Display";

function App() {
  const [todos, setTodos] = useState([
    
  ]);
  const handleStatusChange = (product, completion) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === product.id ? { ...todo, status: completion } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <CreateToDo todos={todos} setTodos={setTodos} />
      <Display
        todos={todos}
        handleStatusChange={handleStatusChange}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default App;
