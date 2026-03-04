import React from "react";
import { useState } from "react";

function App(){
  const [creds,setcreds]=useState({
         username: "",
         password: "",
  })

  

  function handleSubmit(e){
    setcreds({...creds ,[e.target.name]: e.target.value})
  
  }

  async function Api(){
       

  }

  return(
    <form onSubmit={handleSubmit}>
       <div>
      <input
        name="username"
        type="text"
        placeholder="username"
        onChange={handleSubmit}
      />
      <input
        name="password"
        type="text"
        placeholder="password"
        onChange={handleSubmit}
      />
      <button >Login</button>
      <div>
        <h1>{creds.username}</h1>
        <h1>{creds.password}</h1>
      </div>
    </div>
    </form>

  );
}


export default App;