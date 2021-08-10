import React from 'react'
import styled from 'styled-components';
import Logo from './logo.svg'



function Square(props) {
    function handleClick(e){
        debugger
        // transform brick either to another stage or to a bomb
        if (e.target.id === 'bomb'){
            e.target.src = Logo
        } else {

        }
    }
        
    return (
        props.name && props.name === 'bomb' ? 
            <>
            <button id='bomb' onClick={(e) => handleClick(e)} name={props.name}></button>
            <img id={props.name} onClick={(e) => handleClick(e)} />
            </> :
            <>
            <button id='square' onClick={(e) => handleClick(e)} name={props.name}></button>
            <img id={props.name} onClick={(e) => handleClick(e)} />
            </>

        
    )
}

export default Square