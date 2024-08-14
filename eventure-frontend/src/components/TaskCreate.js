import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers, getEvents, createTask } from "../api";
import "../styles/TaskCreate.css";

const TaskCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [assigneeId, setAssigneeId] = useState("");
  const [eventId, setEventId] = useState("");
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));

    getEvents()
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      deadline,
      taskStatus: "pending", // Fixed casing to match your backend
      assigneeId,
      eventId,
    };
    createTask(newTask)
      .then((response) => {
        console.log("Task created:", response.data);
        // Reset the form after successful creation
        setTitle("");
        setDescription("");
        setDeadline("");
        setAssigneeId("");
        setEventId("");
      })
      .catch((error) => console.error("Error creating task:", error));
  };

  return (
    <div className="task-create-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Events</Link>
        <Link to="/create-task">Tasks</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Logout</Link>
      </div>
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
        <div className="form-group">
          <label>Assignee</label>
          <select
            value={assigneeId}
            onChange={(e) => setAssigneeId(e.target.value)}
          >
            <option value="">Select Assignee</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Event</label>
          <select value={eventId} onChange={(e) => setEventId(e.target.value)}>
            <option value="">Select Event</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.eventName}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="button">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskCreate;
