import React from "react"
import Board2 from './Board2'


export default function Bomb(){
    debugger

    setTimeout(function(){
        return <Board2/>
   }, 5000)
    return (
        <img id='explosion' src='https://images.unsplash.com/photo-1503217114888-7b44283b2652?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='bomb' />
    )
}