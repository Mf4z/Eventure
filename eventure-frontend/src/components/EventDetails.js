import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getEventById, deleteEvent } from "../api"; // Assume these API calls are in api.js
import "../styles/EventDetails.css";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getEventById(eventId)
      .then((data) => setEvent(data))
      .catch((error) => console.error("Error fetching event details:", error));
  }, [eventId]);

  const handleDelete = () => {
    deleteEvent(eventId)
      .then(() => {
        console.log("Event deleted successfully");
        navigate("/dashboard");
      })
      .catch((error) => console.error("Error deleting event:", error));
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-details-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Events</Link>
        <Link to="/create-task">Tasks</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Logout</Link>
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
            <div>{event.eventDescription}</div>
          </div>
          <div className="event-info">
            <label>Event Responsible:</label>
            <div>{event.organiser.name}</div>
          </div>
          <div className="event-info">
            <label>Participants:</label>
            <div>
              {event.participants
                .map((participant) => participant.name)
                .join(", ")}
            </div>
          </div>
          <div className="event-info buttons">
            <Link to={`/edit-event/${eventId}`} className="button">
              Edit Event
            </Link>
            <button onClick={handleDelete} className="button delete">
              Delete Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
