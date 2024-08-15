import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, getParticipants, createEvent } from "../api"; // Importing from api.js
import "../styles/EventCreate.css";

const EventCreate = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [participants, setParticipants] = useState([]);
  const [users, setUsers] = useState([]);
  const [availableParticipants, setAvailableParticipants] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));

    getParticipants()
      .then((data) => setAvailableParticipants(data))
      .catch((error) => console.error("Error fetching participants:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      eventName,
      eventDate,
      location,
      eventDescription: description,
      organiser: responsible,
      participants: participants.map((id) => ({ id })), // Only send participant IDs
    };

    createEvent(newEvent)
      .then((response) => {
        console.log("Event created:", response);
        setSuccessMessage("Event created successfully!"); // Set success message
        // Reset the form after successful creation
        setEventName("");
        setEventDate("");
        setLocation("");
        setDescription("");
        setResponsible("");
        setParticipants([]);

        // Redirect to dashboard
        navigate("/dashboard");
      })
      .catch((error) => console.error("Error creating event:", error));
  };

  return (
    <div className="event-create-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Events</Link>
        <Link to="/create-task">Tasks</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Logout</Link>
      </div>
      <div className="container">
        <div className="form-header">
          <h1>Create New Event</h1>
        </div>
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="eventName">Event Name</label>
              <input
                type="text"
                id="eventName"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="eventDate">Event Date</label>
              <input
                type="date"
                id="eventDate"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="eventLocation">Location</label>
              <input
                type="text"
                id="eventLocation"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="eventDescription">Event Description</label>
              <textarea
                id="eventDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-field">
              <label htmlFor="eventResponsible">Responsible for Event</label>
              <select
                id="eventResponsible"
                value={responsible}
                onChange={(e) => setResponsible(e.target.value)}
                required
              >
                <option value="">Select organiser</option>
                {users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="eventParticipants">Participants</label>
              <select
                id="eventParticipants"
                multiple
                value={participants}
                onChange={(e) =>
                  setParticipants(
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
              >
                {availableParticipants.map((participant) => (
                  <option key={participant._id} value={participant._id}>
                    {participant.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventCreate;
