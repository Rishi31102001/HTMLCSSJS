// About.js
import React from "react";
import { useParams,Link,useNavigate} from "react-router-dom";



function About() {
    const { id, subID } = useParams();
    const NAV = useNavigate();

    return (
        <div>
            About page {id} {subID}
            <button onClick={()=>NAV('/Services')}>Click me for Services</button>
            <button onClick={()=>NAV('/')} >Click me for Home</button>
        </div>
    );
}

export default About;
