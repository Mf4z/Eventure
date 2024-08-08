import React, { useState } from 'react';
import './TaskCreate.css';

const TaskCreate = () => {
  const [relatedEvent, setRelatedEvent] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDeadline, setTaskDeadline] = useState('');
  const [taskAssignee, setTaskAssignee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle task creation logic here
  };

  return (
    <div className="task-create-container">
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Tasks</a>
        <a href="#">Profile</a>
        <a href="#">Logout</a>
      </div>
      <div className="container">
        <div className="form-header">
          <h1>Create New Task</h1>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="relatedEvent">Related Event</label>
              <select id="relatedEvent" value={relatedEvent} onChange={(e) => setRelatedEvent(e.target.value)} required>
                <option value="event1">Event 1: Tech Conference</option>
                <option value="event2">Event 2: Annual Meetup</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="taskTitle">Task Title</label>
              <input type="text" id="taskTitle" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} required />
            </div>
            <div className="form-field">
              <label htmlFor="taskDescription">Task Description</label>
              <textarea id="taskDescription" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} required></textarea>
            </div>
            <div className="form-field">
              <label htmlFor="taskDeadline">Deadline</label>
              <input type="date" id="taskDeadline" value={taskDeadline} onChange={(e) => setTaskDeadline(e.target.value)} required />
            </div>
            <div className="form-field">
              <label htmlFor="taskAssignee">Assignee</label>
              <select id="taskAssignee" value={taskAssignee} onChange={(e) => setTaskAssignee(e.target.value)} required>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
              </select>
            </div>
            <div className="form-field">
              <button type="submit" className="button">Create Task</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskCreate;
