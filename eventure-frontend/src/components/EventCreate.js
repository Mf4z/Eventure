import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventCreate.css';

const EventCreate = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [responsible, setResponsible] = useState('');
  const [participants, setParticipants] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users for participants and responsible
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      event_name: eventName,
      event_date: eventDate,
      location: location,
      event_description: description,
      organiser: responsible,
      participants: participants.map(id => ({ participant_id: id }))
    };
    // Save the new event
    axios.post('/api/events', newEvent)
      .then(response => {
        console.log('Event created:', response.data);
        // Reset form
        setEventName('');
        setEventDate('');
        setLocation('');
        setDescription('');
        setResponsible('');
        setParticipants([]);
      })
      .catch(error => console.error('Error creating event:', error));
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
              <input type="text" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
            </div>
            <div className="form-field">
              <label htmlFor="eventDate">Event Date</label>
              <input type="date" id="eventDate" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
            </div>
            <div className="form-field">
              <label htmlFor="eventLocation">Location</label>
              <input type="text" id="eventLocation" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
            <div className="form-field">
              <label htmlFor="eventDescription">Event Description</label>
              <textarea id="eventDescription" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
            <div className="form-field">
              <label htmlFor="eventResponsible">Event Responsible</label>
              <select id="eventResponsible" value={responsible} onChange={(e) => setResponsible(e.target.value)} required>
                {users.map(user => (
                  <option key={user.user_id} value={user.user_id}>{user.name}</option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="eventParticipants">Participants</label>
              <select id="eventParticipants" multiple value={participants} onChange={(e) => setParticipants(Array.from(e.target.selectedOptions, option => option.value))}>
                {users.map(user => (
                  <option key={user.user_id} value={user.user_id}>{user.name}</option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <button type="submit" className="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventCreate;
