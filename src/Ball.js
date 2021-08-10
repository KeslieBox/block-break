import React from 'react'

function Ball(props){

    function handleKeyDown(e) {
    //   keydown event where ball drops into the game
    }

    function moveBall(e){
    //  function to make the ball move based on what it hits etc
    }

    return (
    <div className='container'>
        <ball id='ball' tabIndex={-1} style={{bottom: '100px', left: '300px', borderRadius: '20px'}} onKeyDown={(e) => handleKeyDown(e)}></ball>
    </div>
    )
  }

  export default Ball

  