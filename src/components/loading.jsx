import React from "react";
import {ClipLoader} from 'react-spinners'
import './loading.css'

function Load(){
    return(
        <div
            style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           }}
            >
           <ClipLoader size={50} color="#36d7b7" />
        </div>
        
    )
}

export default Load;