import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const updateWindowSize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    console.log("event listener added");  
    return () => {window.removeEventListener('resize', updateWindowSize);
    console.log("event listener removed");}
   
  }, [windowSize]);

  return (
    <div className="App">
      <h2>Window Size :</h2>
      <p>Height is {windowSize.height} and Width is {windowSize.width}</p>
    </div>
  );
}

export default App;
