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

    generateBoard(30, 15)

    return (
        <div className='container'>
            {board.map((rows, i) => {

                return (<div className="board-row" key={i}>
                {rows.map((_, i) => { 
                    if (rows[i] % 3 === 0){
                        return <>
                            <Square key={i} id='square' name='bomb'/>
                        </>
                    } else {    
                        return <>
                            <Square key={i} id='square'/>
                        </>
                    }
                })}
                </div>)
            })}         
        </div>
    )  
}



export default Board;