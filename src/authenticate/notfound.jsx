import React from "react";
import './notfound.css';
import { Link } from "react-router-dom";

function Notfound(){
    return(
         <div className="notfound-container">

      <div className="notfound-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-text">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="home-btn">
          Go Back Home
        </Link>
      </div>

      <div className="floating-shapes">
        <div className="circle"></div>
        <div className="triangle"></div>
        <div className="square"></div>
      </div>

    </div>
    )
}

export default Notfound;