import React from 'react'

function Ball(props){

    function handleKeyDown(e) {
      
    }

    function dropBall(e){
     
    }

    return (
    <div className='container'>
        <div id='ball' tabIndex={-1} style={{bottom: '100px', left: '300px', borderRadius: '20px'}} onKeyDown={(e) => handleKeyDown(e)}></div>
    </div>
    )
  }

  export default Ball