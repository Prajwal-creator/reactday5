import React from "react";
import "./navbar.css";
import Login from "./Login";
import Signup from "./sinnup";
import { useState } from "react";

function Navbar() {
  const [handle, sethandle] = useState(false);
  const [name,setname]= useState("Signup");

  function eventhandle() {
    sethandle((handle) => !handle);
      if(handle){
        setname("signup")
      }else{
        setname("Login")
      }
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <button className="amd-btn" onClick={() => eventhandle()}>
            {name}
          </button>
        </div>
        <div className="nav-right">
          <h2 className="logo">TODOLIST</h2>
        </div>
      </nav>
      {
        
        handle? (<Signup/>) : (<Login/>)
      }
    </>
  );
}

export default Navbar;
