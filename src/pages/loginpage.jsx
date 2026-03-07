import React from "react";
import Navbar from "../components/navbar";
import Login from "../components/Login";

function Loginpage(){
    return(
        <div>
            <Navbar name={"Signup"}/>
            <Login/>
        </div>
    )
}

export default Loginpage;