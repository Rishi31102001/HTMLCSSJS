import React from "react";
import { useParams } from "react-router-dom";
import { useSearchParams,useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'



function Home(children) {
    //search params
    const [searchParams] = useSearchParams();
    const nav = useNavigate();

    const name = searchParams.get('name')
    const age = searchParams.get('age')
    const stream = searchParams.get('stream')


    return (
        <div>Home page
            <button onClick={() => nav('/about')}>Click me for About</button>
            <button onClick={() => nav('/Services')} >Click me for Services</button>
            <h1>My name:{name}</h1>
            <h2>My age:{age}</h2>
            <h3>My stream:{stream}</h3>
        </div>


    )
}

export default Home;