import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/EventDetails.css";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/events/${eventId}`)
      .then((response) => setEvent(response.data))
      .catch((error) => console.error("Error fetching event details:", error));
  }, [eventId]);

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
            <div>{event.event_name}</div>
          </div>
          <div className="event-info">
            <label>Event Date:</label>
            <div>{event.event_date}</div>
          </div>
          <div className="event-info">
            <label>Location:</label>
            <div>{event.location}</div>
          </div>
          <div className="event-info">
            <label>Description:</label>
            <div>{event.event_description}</div>
          </div>
          <div className="event-info">
            <label>Event Responsible:</label>
            <div>{event.organiser}</div>
          </div>
          <div className="event-info">
            <label>Participants:</label>
            <div>
              {event.participants.map((p) => p.participant_id).join(", ")}
            </div>
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
