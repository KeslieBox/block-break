import React from 'react'
import Paddle from './Paddle'
import Square from './Square'

let board
function Board (){
  
    function generateBoard(columns, rows){
        board = [];
        for (let i = 0; i < rows; i++){
            board[i] = []

            for (let j = 1; j <= columns; j++){
                // <div className="board-row" key={i}>
                    {/* use index of brick to determine where bombs go */}
                    {board[i].push(j)} 
                {/* </div>           */}
            }
        }
        return board;
    }

    function handleClick(e){
        debugger
    }

    // function generateRow(index, max) {
    //     rows = [];
    //     // index = current 
    //     for (index; index < max; index++) {
    //         rows.push(index);
    //         // rows.push(this.renderSquare(index));
    //     }
    //     return rows;
    // }

    generateBoard(28,6)

    return (
        <>
        <img id='dungeon' src='https://images.unsplash.com/photo-1618488629391-e7d08445272b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='dungeon'/>        
        <img id='brick-wall' src='https://images.unsplash.com/photo-1589890378282-face76ca7e0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='brick-wall' />

        <div className='container'>
            
            {board.map((rows, i) => {

                return (<div className="board-row" key={i}>
                {rows.map((_, i) => { 
                    if (rows[i] % 3 === 0){
                        return <>
                            <Square key={i} id='square' name='bomb' />
                        </>
                    } else {
                        if (rows[i + 1] % 3 === 0 || rows[i - 1] % 3 === 0 ){ 
                            // debugger   
                            return <>
                                <Square key={i} id='square' name={'square'} status={'bombAdjacent'}/>
                            </>
                        } else {
                            return <>
                                <Square key={i} id='square' name={'square'}/>
                            </>
                        }
                    }
                })}
                </div>)
            })} 
            {/* <img id='dungeon' src='https://images.unsplash.com/photo-1618488629391-e7d08445272b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='dungeon'/>         */}
        </div>
        </>
    )  
}



export default Board;