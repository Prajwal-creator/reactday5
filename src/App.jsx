import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Login from "./components/Login";
import Signup from "./components/sinnup";
import Loginpage from "./pages/loginpage";
import Homes from "./pages/homes";
import Signupp from "./pages/signupp";
import Updates from "./pages/updatepage";
import ProtectRoute from "./authenticate/authentication";
import Notfound from "./authenticate/notfound";

function App(){
  return(
    <div>
       <BrowserRouter>
           <Routes>   
               <Route path="/" element={<Loginpage/>}/>
               <Route path="/Signup" element={<Signupp/>}/>
               <Route path="*" element={<Notfound/>}/>
               <Route element={<ProtectRoute/>}>
                  <Route path="/home" element={<Homes/>}/>
                  <Route path="/update/:id" element={<Updates/>}/>
               </Route>   
           </Routes>
      </BrowserRouter>    
    </div>
  )
}

export default App;