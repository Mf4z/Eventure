import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

// Import API functions from api.js
import { getUserById, getTasksByUserId, getEventsByUserId } from "../api";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userId");

        // Fetch user data by ID
        const user = await getUserById(userId);
        if (user) {
          setUserName(user.name);
        }

        // Fetch upcoming events for the user
        const eventsData = await getEventsByUserId(userId);
        setEvents(eventsData);

        // Fetch tasks for the user
        const tasksData = await getTasksByUserId(userId);
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
              <p key={event.id}>
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
