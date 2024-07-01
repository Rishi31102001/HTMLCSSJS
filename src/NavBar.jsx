// Navbar.js

import React from 'react';

const Navbar = () => {
  const handleClick = (option) => {
    console.log(option);
  };

  return (
    <div className="navbar">
      <ul>
        <li onClick={() => handleClick('Home')}>Home</li>
        <li onClick={() => handleClick('About')}>About</li>
        <li onClick={() => handleClick('Contact us')}>Contact us</li>
      </ul>
    </div>
  );
};

export default Navbar;
