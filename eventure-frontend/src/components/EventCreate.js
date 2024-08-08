import React, { useState } from "react";
import "./EventCreate.css";

const EventCreate = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [participants, setParticipants] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle event creation logic here
  };

  return (
    <div className="event-create-container">
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Tasks</a>
        <a href="#">Profile</a>
        <a href="#">Logout</a>
      </div>
      <div className="container">
        <div className="form-header">
          <h1>Create New Event</h1>
        </div>
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
              <label htmlFor="eventResponsible">Event Responsible</label>
              <select
                id="eventResponsible"
                value={responsible}
                onChange={(e) => setResponsible(e.target.value)}
                required
              >
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
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
                <option value="participant1">Participant 1</option>
                <option value="participant2">Participant 2</option>
                <option value="participant3">Participant 3</option>
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
