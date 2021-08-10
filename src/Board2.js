import React from 'react'
import Paddle from './Paddle'
import Square from './Square'

let bricks = [1, 2, 3, 4, 5, 6]
let board, rows
class Board extends React.Component{
  
    generateBoard(columns, rows) {
        board = [];
        // while i is less than 40, i = i + 8
        // for (let i = 0; i < columns*rows; i+=columns) {
        // debugger
        // board[i] = board.push(
        //     <>
        //     {/* <div className="board-row" key={i}> */}
        //         {console.log('i, i + columns', i, i + columns)}
        //         {/* generate row with column number of elements, ie row with 8 elements */}
        //         {/* send current index and current index plus number of columns ie 8 */}
        //         {this.generateRow(i, i + columns)}
        //     {/* </div> */}
        //     </>
        //     ); 
        // }
        let i
        for (let i = 0; i < rows; i++){
            board[i] = []

            for (let j = 1; j <= columns; j++){

                <div className="board-row" key={i}>
                    {/* use index of brick to determine where bombs go */}
                    {board[i].push(j)} 
                </div>
            
                
                // board[i] = board.push(this.generateRow(i, i + columns))
                // board[i].push(j)              
            }
        }
        return board;
    }

    generateRow(index, max) {
        rows = [];
        // index = current 
        for (index; index < max; index++) {
            rows.push(index);
            // rows.push(this.renderSquare(index));
        }
        return rows;
    }

    renderSquare(i) {
        debugger
        return (
            // <div className='container'>
                <Square key={i} id='square'/>
            // </div>
        )
    }

    render (){
        
        this.generateBoard(30, 5)
        return (
        <div className='container'>
            {board.map((array, i) => {

                return (<div className="board-row" key={i}>
                {array.map((_, i) => {
                            
                    return <>
                        <Square key={i} id='square'/>
                    </>
                })}
                </div>)
            })} 
            
            {/* <Square id='square'  /> */}
            <Paddle />
            
        </div>
        )
    }

  
}



export default Board;