import axios from "axios";
import React, { useState } from "react";
import "../styles/TaskCreate.css";

const TaskCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      deadline,
      task_status: "pending",
    };
    axios
      .post("http://localhost:5000/api/tasks", newTask) // Update this line
      .then((response) => {
        console.log("Task created:", response.data);
      })
      .catch((error) => console.error("Error creating task:", error));
  };

  return (
    <div className="task-create-container">
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskCreate;
