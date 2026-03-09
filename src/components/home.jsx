import React, { useEffect } from "react";
import { useState } from "react";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Load from "./loading";

function Home() {
  const [arr, setarr] = useState([]);
  const [task,settask] =useState({
    title:""
  })
  const [loader,setloader] = useState(false);
  const Token = localStorage.getItem("token");
  const user=localStorage.getItem("user");
  

  async function deletetodo(id) {
      console.log("the id is recived",id)
    try {
      const response = await axios.delete(
        "http://127.0.0.1:8000/todos/" + id + "/delete/",
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        },
      );
      console.log(response.data);
      setarr((arr)=>arr.filter((item) => item.id !== id));
      console.log("the todo is deleted");
    } catch (error) {
      console.log(error.response.data);
      console.log("the item is deleted");
    }
  }

  async function Addtodo(){

        if(task.title.trim()==""){
          alert("the input field required")
        }else {
          try{
        const response = await axios.post("http://127.0.0.1:8000/todos/create/",task,{
          headers:{
            Authorization: `Bearer ${Token}`
          }
        })
        console.log(response.data);
        settask({title:""})
        setarr((arr)=>[...arr,response.data])
       }catch(error){
        console.log(error.response.data)
       }
      }
  }

  useEffect(() => {
    async function Api() {
      try {
        setloader(true);
        const response = await axios.get("http://127.0.0.1:8000/todos/", {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });
        console.log(response.data);
        setarr(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
      setloader(false);
    }
    Api();
  }, []);

  return (
    <div className="dashboard">
      <header className="navbar">
        <h2 className="logo">Todo App</h2>
        <span className="user">Welcome, {user}</span>
      </header>
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Enter a new task..."
          value={task.title}
          onChange={(e)=>settask({...task ,title:e.target.value})}
          required
        />

        <button className="add-btn" onClick={()=>Addtodo()}>Add Task</button>
      </div>

      <div className="container">
        {arr.map((arm,index) => (
          <div className="task-card" key={index}>
            <div className="task-header">
              <span className="username"></span>
            </div>

            <div className="task-body">
              <p className="task-text">{arm.title}</p>
            </div>

            <div className="task-actions">
              <Link to={`/update/${arm.id}`}><button className="update-btn">Update</button></Link>
              <button className="delete-btn" onClick={() => deletetodo(arm.id)}>
                {arm.id}
              </button>
            </div>
          </div>
        ))}
      </div>
      {
        loader && <Load/>
      }
    </div>
  );
}

export default Home;
