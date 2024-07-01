import React from "react";
import { Link,useNavigate } from "react-router-dom";

function Services(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>Services</h1>
        <button onClick={()=>navigate('/about')}>Click me for About</button>
            <button onClick={()=>navigate('/')} >Click me for Home</button>


        </div>
    )
}

export default Services;