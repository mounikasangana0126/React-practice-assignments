import React from 'react'
import axios from 'axios'
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/login", {
          email,
          password
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
      <form id="registrationForm" onSubmit={handleLogin} >
      <h2>Student Login Form</h2>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} 
          onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} 
          onChange={(e) => setPassword(e.target.value)} />

            <input type="submit" value="Submit"/>
       
       </form>
    </div>
  )
}

export default Login
