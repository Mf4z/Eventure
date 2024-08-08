import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Events</Link>
        <Link to="/create-task">Tasks</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Logout</Link>
      </div>
      <header className="home-header">
        <h1>Welcome to Eventure</h1>
        <p>Your one-stop solution for event management</p>
      </header>
      <nav className="home-nav">
        <ul>
          <li>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/create-event" className="nav-link">
              Create Event
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
