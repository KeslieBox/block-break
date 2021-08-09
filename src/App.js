import React from 'react';
import Sketch from "./Sketch"
import Paddle from "./Paddle"
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      {/* <Sketch /> */}
      {/* I think bricks will be the parent component with paddle child and then ball child of paddle */}
      {/* <Bricks /> */}
      <Paddle />
    </div>
    </>
  );
}

export default App;

