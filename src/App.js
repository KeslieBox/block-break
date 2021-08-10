import React from 'react';
import './App.css';
import Sketch from "./Sketch"
import Paddle from "./Paddle"
import Board from "./Board"
import Board2 from "./Board2"


function App() {
  return (
    <>
    <div className="App">
      {/* <Sketch /> */}
      {/* I think bricks will be the parent component with paddle child and then ball child of paddle */}
      {/* <Bricks /> */}
      {/* <Paddle /> */}
      {/* <Board /> */}
      <Board2 />
    </div>
    </>
  );
}

export default App;

