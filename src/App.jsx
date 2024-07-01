import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './services'
//import Car from './nav'
//import MyComponent from './cardsandarray'
//import ParentComponent from './child'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './nav'

function App() {




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/Services",
      element: <Services />,
    }
    //agar hum ek colon lagyenge ek value se pehle to random values aayega aur data same display hoga
    /*{
      path: "/about/:id/:subID",
      element: <About />,
    }*/

  ]);

  /*const [count, setCount] = useState(0)
  const shoppingList =[

    {
    title:"1st product",
    desc:"This is 1st product",
    eligibleToBuy:true
    },
    {
    title:"2nd product",
    desc:"This is 2nd product",
    eligibleToBuy:false
    },
    {
    title:"3rd product",
    desc:"This is 3rd product",
    eligibleToBuy:true
    },
    
    ]*/
  //create router dom is function and it takes argument as array of object
  //what ever we want to show or render to the user comes in element
  //path shows path of the webpage

  return (
    <>

      {/*<BrowserRouter>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/Services"} element={<Services />} />
        </Routes>
      </BrowserRouter>*/}
      <Home>
        <p style={{background:"black" ,color:"blue"}}> ijfojrfojro</p>
      </Home>


      //<RouterProvider router={router} />

    </>
    //  { <MyComponent data={shoppingList} />}
    // <ParentComponent/>
  )

}

export default App
