import React, { useState } from "react";
import './signup.css';
import axios from 'axios'

function Signup() {
    const [creds,setcreds] = useState({
        username: "",
        email: "",
        password: ""
    }
    )

    function eventhandl(e){
        setcreds({...creds,[e.target.name]: e.target.value})
        console.log(creds.username);
        console.log(creds.password);
        console.log(creds.email);

    }
    async function Api(e){
        e.preventDefault();
        try {

        const response = await axios.post("http://127.0.0.1:8000/signup/",creds)
        console.log(response.data)
        setcreds({username: "" ,email: "" ,password:""})    
        } catch (error) {
        console.log(error.response.data)     
        }
    }
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="title">Create Account</h2>
        <p className="subtitle">Join and manage your todos</p>

        <form onSubmit={Api}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input-field"
            value={creds.username}
            onChange={eventhandl}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            value={creds.email}
            onChange={eventhandl}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value={creds.password}
            onChange={eventhandl}
          />

          <button className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
