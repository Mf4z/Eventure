import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import EventCreate from "./components/EventCreate";
import EventDetails from "./components/EventDetails";
import TaskCreate from "./components/TaskCreate";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import "./styles/App.css";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("userId");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/create-event"
          element={isAuthenticated ? <EventCreate /> : <Navigate to="/login" />}
        />
        <Route
          path="/event-details/:eventId"
          element={
            isAuthenticated ? <EventDetails /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/create-task"
          element={isAuthenticated ? <TaskCreate /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
