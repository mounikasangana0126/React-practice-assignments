import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .then((response) => {
        const token = response.data.token;
        if (token) {
          localStorage.setItem("token", token);
          navigate("/home");
        } else {
          setError("Invalid credentials");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        setError("Something went wrong");
      });
  };

  return (
    <div>
      <form id="loginForm" onSubmit={handleLogin}>
        <h2>Student Login Form</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p>{error}</p>}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
