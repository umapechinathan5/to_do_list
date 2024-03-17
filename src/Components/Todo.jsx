import React, { useState } from "react";

const Todo = ({ todo, handleStatusChange, removeTodo }) => {
  const [editMode, setEditMode] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    // Save the updated description
    todo.description = description;
  };

  return (
    <div
      className="card text-white bg-primary mb-3 col-md-4"
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header">{todo.title}</div>
      <div className="card-body">
        {editMode ? (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="form-control"
          />
        ) : (
          <h5 className="card-title">{todo.description}</h5>
        )}
        <div>
          <label htmlFor="status">Status : </label>
          <select
            name="status"
            id="status"
            value={todo.status ? "completed" : "pending"}
            onChange={(e) => {
              const status = e.target.value === "completed" ? true : false;
              handleStatusChange(todo, status);
            }}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="card-footer">
        {editMode ? (
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        ) : (
          <>
            <button className="btn btn-success" onClick={handleEdit}>
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => removeTodo(todo.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
