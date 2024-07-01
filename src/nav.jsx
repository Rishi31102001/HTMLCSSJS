import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <div>
        <Link to={'/'}>Home</Link>
        <br/>
        <Link to={'/about'}>About</Link>
        <br/>
        <Link to={'/services'}>services</Link>
        <br/>
    </div>
  )
}

export default Nav