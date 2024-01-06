import React, { useState } from 'react';
import Tooltip from './tooltip';
import TooltipSelector from './Tooltipselector';
import "./styles.css";

const App = () => {
  const [position, setPosition] = useState("left");

  const handleChange =(value) => {
    setPosition(value);
  }

  return (
    <div className='App'>
     <h1 className='TooltipTitle'> Tooltip</h1>

      <TooltipSelector onChange={handleChange}/>
      <Tooltip position={position} text="Thanks for hovering! I am a tooltip"/>
    </div>
  );
};

export default App;
