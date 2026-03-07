import React from "react";
import Update from "../components/update";
import { useParams } from "react-router-dom";

function Updates(){
    const { id } = useParams()
    return(
        <Update uid={id}/>
    )
}

export default Updates;