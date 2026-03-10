import React, { useState } from "react";
import './signup.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Signup() {
    const [creds,setcreds] = useState({
        username: "",
        email: "",
        password: ""
    }
    
    )
    const navigate = useNavigate();

    const [loading,setloading] = useState(false);

    function eventhandl(e){
        setcreds({...creds,[e.target.name]: e.target.value})
        console.log(creds.username);
        console.log(creds.password);
        console.log(creds.email);

    }
    async function Api(e){
        e.preventDefault();
        try {
          if(creds.username.trim()=="" || creds.password.trim()=="" || creds.email.trim()==""){
            alert("the creds where empty please enter to proceed...");
          }else{
            setloading(true)
            const response = await axios.post("http://127.0.0.1:8000/signup/",creds)
            console.log(response.data)
            setcreds({username: "" ,email: "" ,password:""})
            if(response.data){
              alert("User created successfully");
              navigate('/')
            }
          }    
        } catch (error) {
        console.log(error.response.data.error);
        alert(error.response.data.error);
             
        }
        setloading(false)
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
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            value={creds.email}
            onChange={eventhandl}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value={creds.password}
            onChange={eventhandl}
            required
          />

          <button className="signup-btn">{
            loading ? <span className="spinner"></span> : "Signup"
            }</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
