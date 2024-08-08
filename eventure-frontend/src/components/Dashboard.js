import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Fetch user data (assuming the user ID is stored in local storage after login)
    const userId = localStorage.getItem("userId");
    axios
      .get(`/api/users/${userId}`)
      .then((response) => {
        setUserName(response.data.name);
      })
      .catch((error) => console.error("Error fetching user data:", error));

    // Fetch upcoming events
    axios
      .get("/api/events/upcoming")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));

    // Fetch tasks for the user
    axios
      .get(`/api/tasks/user/${userId}`)
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Events</Link>
        <Link to="/create-task">Tasks</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Logout</Link>
      </div>
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome, {userName}</h1>
          <Link to="/create-event" className="button">
            Create New Event
          </Link>
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
