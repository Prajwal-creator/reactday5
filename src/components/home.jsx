import React, { useEffect } from "react";
import {useState} from "react";
import './home.css'
import axios from "axios";

function Home(){
  const [arr,setarr]= useState([])
  const Token = localStorage.getItem('token') 

  async function deletetodo(id){
        try {
           const response = await axios.delete("http://127.0.0.1:8000/todos/"+id+"/delete/",{
            headers:{
              Authorization: `Bearer ${Token}`
            }
          }
        )
           console.log(response.data)
           setarr(arr.filter((item)=>item.id!==id))
           console.log("the todo is deleted")
        } catch (error) {
            console.log(error.response.data);
            console.log("the item is deleted")
      
        }
  }

  useEffect(()=>{
    async function Api(){ 

     try {
         const response = await axios.get("http://127.0.0.1:8000/todos/",{
          headers:{
            Authorization: `Bearer ${Token}`
          }
         })
         console.log(response.data);
         setarr(response.data);

      
     } catch (error) {
          console.log(error.response.data);
      
     }

    }
    Api();
},[])
    
    return(
      <div className="dashboard">

      <header className="navbar">
        <h2 className="logo">Todo App</h2>
        <span className="user">Welcome, Username</span>
      </header>
    
       
        <div className="container">
     {arr.map((arm)=>(
        <div className="task-card" key={arm.id}>

          <div className="task-header">
            <span className="username"></span>
          </div>

          <div className="task-body">
            <p className="task-text">
              {arm.title}
            </p>
          </div>

          <div className="task-actions">
            <button className="update-btn">Update</button>
            <button className="delete-btn" onClick={()=>deletetodo(arm.id)}>Delete</button>
          </div>

        </div>
       ))
     }
      

      </div>

    </div>
  )
}

export default Home;