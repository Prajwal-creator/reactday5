import React from "react";
import "./navbar.css";
import Login from "./Login";
import Signup from "./sinnup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar({name}) {
   const navigate = useNavigate()

  function eventhandle(name){
    if(name === "Signup"){
       navigate("/Signup");
    }else{
       navigate("/");
    }


  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <button className="amd-btn" onClick={()=>eventhandle(name)}>
            {name}
          </button>
        </div>
        <div className="nav-right">
          <h2 className="logo">TODOLIST</h2>
        </div>
      </nav>
     </>
  );
}

export default Navbar;
