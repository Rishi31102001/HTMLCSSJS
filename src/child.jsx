import React from 'react';
import MyComponent from './parent'; 
const ParentComponent = () => {
  const handleChildClick = (argument) => {
    console.log('Received argument from child:', argument);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <MyComponent onClickHandler={handleChildClick} />
    </div>
  );
};

export default ParentComponent;
