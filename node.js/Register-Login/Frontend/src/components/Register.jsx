import React, { useState } from "react";
import "../App";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/register", {
      username,
      email,
      password,
      confirmpassword
    })
    .then(result => {
      console.log(result.data);  
    })
    .catch(err => {
      console.error(err);
    });
  };

  return (
    <div>
      <form id="registrationForm" onSubmit={handleRegister}>
        <h2>Student Registration Form</h2>
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ex: name@example.com"
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

        <label htmlFor="confirmpassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <input type="submit" value="Submit" />
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;
