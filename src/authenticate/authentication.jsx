import React, { Children } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate,Outlet} from "react-router-dom";

const ProtectRoute=({children})=>{
      const Token=localStorage.getItem('token');
      console.log("accessed the route")

      if(!Token){
        console.log("you or true accessed the not token");
        return <Navigate to="/" replace />
      }
      return <Outlet/>
}

export default ProtectRoute;