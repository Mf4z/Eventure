import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TaskCreate.css";

const TaskCreate = () => {
  const [relatedEvent, setRelatedEvent] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskAssignee, setTaskAssignee] = useState("");
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch events
    axios
      .get("/api/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));

    // Fetch users for assignee
    axios
      .get("/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      assignee_id: taskAssignee,
      event_id: relatedEvent,
      title: taskTitle,
      description: taskDescription,
      deadline: taskDeadline,
      task_status: "in progress",
      date_assigned: new Date().toISOString().split("T")[0],
    };
    // Save the new task
    axios
      .post("/api/tasks", newTask)
      .then((response) => {
        console.log("Task created:", response.data);
        // Reset form
        setRelatedEvent("");
        setTaskTitle("");
        setTaskDescription("");
        setTaskDeadline("");
        setTaskAssignee("");
      })
      .catch((error) => console.error("Error creating task:", error));
  };

  return (
    <div className="task-create-container">
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Tasks</a>
        <a href="#">Profile</a>
        <a href="#">Logout</a>
      </div>
      <div className="container">
        <div className="form-header">
          <h1>Create New Task</h1>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="relatedEvent">Related Event</label>
              <select
                id="relatedEvent"
                value={relatedEvent}
                onChange={(e) => setRelatedEvent(e.target.value)}
                required
              >
                {events.map((event) => (
                  <option key={event._id} value={event._id}>
                    {event.event_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="taskTitle">Task Title</label>
              <input
                type="text"
                id="taskTitle"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="taskDescription">Task Description</label>
              <textarea
                id="taskDescription"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-field">
              <label htmlFor="taskDeadline">Deadline</label>
              <input
                type="date"
                id="taskDeadline"
                value={taskDeadline}
                onChange={(e) => setTaskDeadline(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="taskAssignee">Assignee</label>
              <select
                id="taskAssignee"
                value={taskAssignee}
                onChange={(e) => setTaskAssignee(e.target.value)}
                required
              >
                {users.map((user) => (
                  <option key={user.user_id} value={user.user_id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <button type="submit" className="button">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskCreate;
