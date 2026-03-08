import React from "react";
import './loading.css'

function Load(){
    return(
        <button className="login-btn" disabled={loading}>
                {loading ? <span className="spinner"></span> : text}
        </button>
    )
}

export default Load;