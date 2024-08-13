import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import { getUserById, getTasksByUserId, getEventsByUserId } from "../api";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const user = await getUserById(userId);
        if (user) {
          setUserName(user.name);
        }
        // const eventsData = await getEventsByUserId(userId);
        // setEvents(eventsData);
        const eventsData = await getEventsByUserId(userId);
        if (Array.isArray(eventsData)) {
          setEvents(eventsData);
        } else {
          console.error("Unexpected events data:", eventsData);
          setEvents([]); // Set to empty array if not an array
        }

        const tasksData = await getTasksByUserId(userId);
        setTasks(tasksData);
      } catch (error) {
        setError("Failed to load data. Please try again later.");
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
        {error && <div className="error-message">{error}</div>}
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
