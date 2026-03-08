import React from "react";
import './update.css'
import {useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update({uid}){

    const [task,settask] =useState({
        title:""
    })

    const navigate = useNavigate();
    const Token =localStorage.getItem("token");

async function todoupdate(){
    try{
        if(task.title.trim() == ""){
            alert("please enter the text to update!")
        }else{
            const response = await axios.patch("http://127.0.0.1:8000/todos/"+uid+"/update/",task,{
            headers:{
                Authorization: `Bearer ${Token}`
            }
        })
        console.log("successfully working")
        console.log(response.data);
        settask({...task,title:""});
        navigate("/home");
        }
        

    }catch(error){
        console.log(error.response.data);
        console.log("not working")
    }

}
    
    return(
        <div className="update-page">

      <div className="update-card">

        <h2 className="title">Update Todo</h2>

        <input
          type="text"
          placeholder="Update your task..."
          className="task-input"
          value={task.title}
          onChange={(e)=>{settask({title:e.target.value})}}

        />

        <button className="update-btn" onClick={()=>todoupdate()}>
          Update Task
        </button>

      </div>

    </div>
    )
}

export default Update;