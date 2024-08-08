import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
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
          <p>Event 1: Conference on Web Development - Date: 2024-02-15</p>
          <p>Event 2: Tech Networking Meetup - Date: 2024-03-05</p>
        </div>
        <div className="dashboard-section">
          <h2>Your Tasks</h2>
          <div className="task-item">
            Task 1: Prepare presentation for the conference
          </div>
          <div className="task-item">
            Task 2: Coordinate with tech meetup speakers
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
