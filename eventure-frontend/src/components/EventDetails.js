import React from "react";
import "./EventDetails.css";

const EventDetails = () => {
  // Mock event data, replace with actual data fetching logic
  const event = {
    eventName: "Conference on Web Development",
    eventDate: "2024-02-15",
    location: "Techville Convention Center",
    description:
      "This conference will cover various aspects of web development...",
    organiser: "User 2",
    participants: ["John Doe", "Jane Smith", "Alex Johnson"],
  };

  return (
    <div className="event-details-container">
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Tasks</a>
        <a href="#">Profile</a>
        <a href="#">Logout</a>
      </div>
      <div className="container">
        <div className="event-header">
          <h1>Event Details</h1>
        </div>
        <div className="event-section">
          <div className="event-info">
            <label>Event Name:</label>
            <div>{event.eventName}</div>
          </div>
          <div className="event-info">
            <label>Event Date:</label>
            <div>{event.eventDate}</div>
          </div>
          <div className="event-info">
            <label>Location:</label>
            <div>{event.location}</div>
          </div>
          <div className="event-info">
            <label>Description:</label>
            <div>{event.description}</div>
          </div>
          <div className="event-info">
            <label>Event Responsible:</label>
            <div>{event.organiser}</div>
          </div>
          <div className="event-info">
            <label>Participants:</label>
            <div>{event.participants.join(", ")}</div>
          </div>
          <div className="event-info">
            <button className="button">Edit Event</button>
            <button className="button">Delete Event</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
