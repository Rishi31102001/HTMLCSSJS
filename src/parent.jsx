import React from 'react';

const MyComponent = ({ onClickHandler }) => {
  const handleClick = () => {
    const argument = 'Hello from child component!';
    onClickHandler(argument);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default MyComponent;
