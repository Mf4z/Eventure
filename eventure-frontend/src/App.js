import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import EventCreate from "./components/EventCreate";
import EventDetails from "./components/EventDetails";
import TaskCreate from "./components/TaskCreate";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-event" element={<EventCreate />} />
        <Route path="/event-details/:eventId" element={<EventDetails />} />
        <Route path="/create-task" element={<TaskCreate />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
