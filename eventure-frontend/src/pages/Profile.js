import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axios
      .get(`/api/users/${userId}`)
      .then((response) => {
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setContact(response.data.contact);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleSave = () => {
    const updatedUser = { ...user, name, email, contact };
    axios
      .put(`/api/users/${user._id}`, updatedUser)
      .then((response) => {
        setUser(response.data);
        setIsEditing(false);
      })
      .catch((error) => console.error("Error updating user data:", error));
  };

  return (
    <div className="profile-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Events</Link>
        <Link to="/create-task">Tasks</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Logout</Link>
      </div>
      <div className="container">
        <div className="profile-header">
          <h1>User Profile</h1>
        </div>
        <div className="profile-section">
          <div className="profile-info">
            <label>Name:</label>
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <div>{user.name}</div>
            )}
          </div>
          <div className="profile-info">
            <label>Email:</label>
            {isEditing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <div>{user.email}</div>
            )}
          </div>
          <div className="profile-info">
            <label>Contact:</label>
            {isEditing ? (
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            ) : (
              <div>{user.contact}</div>
            )}
          </div>
          <div className="profile-actions">
            {isEditing ? (
              <>
                <button className="button" onClick={handleSave}>
                  Save
                </button>
                <button className="button" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </>
            ) : (
              <button className="button" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
