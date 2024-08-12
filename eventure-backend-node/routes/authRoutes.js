// authRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/user"); // Assuming you have a User model

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // Check if user exists and password matches
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Respond with user details (excluding sensitive information like password)
    res.json({ id: user._id, name: user.name, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Optional: Add more auth-related routes here, like registration, password reset, etc.

module.exports = router;
