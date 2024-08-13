import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login attempt"); // Add this line to check if the function is triggered

    try {
      console.log("Attempting login..."); // Debugging log

      const userData = await loginUser(email, password);

      console.log("Login successful:", userData); // Debugging log

      // Save the user's ID, name, and role to localStorage

      localStorage.setItem("userId", userData.id);
      localStorage.setItem("userName", userData.name);
      localStorage.setItem("userRole", userData.role);

      console.log("User ID in localStorage:", localStorage.getItem("userId")); // Debugging log
      console.log(
        "User Name in localStorage:",
        localStorage.getItem("userName")
      ); // Debugging log

      // Redirect to dashboard after successful login
      navigate("/dashboard");
    } catch (error) {
      setError("Invalid email or password");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login to Eventure</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
