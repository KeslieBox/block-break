import {React, useState} from 'react'
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-transition-group'
import Logo from './logo.svg'
import Bomb from './Bomb'


// const Button = styled.button `
//   margin: 40px;
//   border: 5px outset pink;
//   &:hover {
//    background-color: yellow;
//  }`

function Square(props) {
    const [bomb, setBomb] = useState(false)

    function handleClick(e, status){
        // flip brick to bomb
        if (e.target.id === 'bomb'){
            debugger
            e.target.src = Logo
            setBomb(true)
            // render bomb component, then render homepage or "try again" etc
        // change brick to some other thing, maybe numbers of bombs it is touching, turn red if it is next to bomb
        } else {
            debugger
            status === 'bombAdjacent' ? e.target.style.backgroundColor = 'red' : e.target.style.backgroundColor = 'blue'
        }
    }
    
    if(bomb === true){
        debugger
        return <Bomb/>
    } else {
        return (
            props.name && props.name === 'bomb' ? 
                <>
                {/* <button id='bomb' onClick={(e) => handleClick(e)} name={props.name}/> */}
                <img id={props.name} onClick={(e) => handleClick(e)} />
                </> :
                <button id='square' onClick={(e) => handleClick(e, props.status)} name={props.name}></button>  
                // <img src='' alt='brick' id='square' onClick={(e) => handleClick(e, props.status)} name={props.name}/>   
        )
    }
    // return (
    //     props.name && props.name === 'bomb' ? 
    //     <>
    //         <button id='bomb' onClick={(e) => handleClick(e)} name={props.name}></button>
    //         <img id={props.name} onClick={(e) => handleClick(e)} />
    //     </> :
    //     <>
    //         <button id='square' onClick={(e) => handleClick(e)} ></button>
    //         <img id='sqImage' onClick={(e) => handleClick(e)} />
    //     </>

        
    // )
}

export default Square