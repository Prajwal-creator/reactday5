import React from "react";
import axios from 'axios';
import './login.css';
import { useState } from "react";


function Login() {
    const [creds,setcreds]=useState({
        username: "",
        password: ""
    })

    function Logger(e){
        setcreds({...creds,[e.target.name]: e.target.value})
        console.log(creds.username);
        console.log(creds.password);

    }
    async function Loginn(e){
        e.preventDefault();
        try {
              const response = await axios.post("http://127.0.0.1:8000/login/",creds);
              console.log(response.data);
              const token = response.data.access;
              console.log(token);
              localStorage.setItem("token",token);
              setcreds({username: "",password: ""})
        } catch (error) {
            console.log(error.response.data);
            
        }
    }
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">Todo App</h2>
        <p className="subtitle">Login to manage your tasks</p>
        <form onSubmit={Loginn}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input-field"
            value={creds.username}
            onChange={Logger}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value={creds.password}
            onChange={Logger}
          />
          <button className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;