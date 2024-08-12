import axios from "axios";

const NODE_API_URL =
  process.env.REACT_APP_NODE_API_URL || "http://localhost:5000/api";
const SPRING_API_URL =
  process.env.REACT_APP_SPRING_API_URL || "http://localhost:8080/api";

// Node.js API for Users and Tasks
export const getUsers = async () => {
  try {
    const response = await axios.get(`${NODE_API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${NODE_API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${NODE_API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Auth API for login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${NODE_API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const getTasks = async () => {
  try {
    const response = await axios.get(`${NODE_API_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const getTasksByUserId = async (userId) => {
  try {
    const response = await axios.get(`${NODE_API_URL}/tasks/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tasks for user with ID ${userId}:`, error);
    throw error;
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(`${NODE_API_URL}/tasks`, taskData);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

// Spring Boot API for Events and Participants
export const getEvents = async () => {
  try {
    const response = await axios.get(`${SPRING_API_URL}/events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const getEventsByUserId = async (userId) => {
  try {
    const response = await axios.get(`${SPRING_API_URL}/events/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching events for user with ID ${userId}:`, error);
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${SPRING_API_URL}/events`, eventData);
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

export const getParticipants = async () => {
  try {
    const response = await axios.get(`${SPRING_API_URL}/participants`);
    return response.data;
  } catch (error) {
    console.error("Error fetching participants:", error);
    throw error;
  }
};

export const createParticipant = async (participantData) => {
  try {
    const response = await axios.post(
      `${SPRING_API_URL}/participants`,
      participantData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating participant:", error);
    throw error;
  }
};
