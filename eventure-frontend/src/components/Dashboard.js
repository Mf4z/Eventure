import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch upcoming events
    axios
      .get("/api/events/upcoming")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));

    // Fetch tasks for the user
    axios
      .get("/api/tasks/user")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Tasks</a>
        <a href="#">Profile</a>
        <a href="#">Logout</a>
      </div>
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome, [User Name]</h1>
          <button className="button">Create New Event</button>
        </div>
        <div className="dashboard-section">
          <h2>Upcoming Events</h2>
          {events.length > 0 ? (
            events.map((event) => (
              <p key={event._id}>
                Event: {event.event_name} - Date: {event.event_date}
              </p>
            ))
          ) : (
            <p>No upcoming events</p>
          )}
        </div>
        <div className="dashboard-section">
          <h2>Your Tasks</h2>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task._id} className="task-item">
                {task.title}: {task.description}
              </div>
            ))
          ) : (
            <p>No tasks assigned</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
