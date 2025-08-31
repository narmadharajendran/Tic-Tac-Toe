import { useCallback, useState } from "react";
import "./board.styles.scss";
import Square from "../square/square";

const Board = (props) =>{
    const {handleSquareClick, history} = props;
    const squares = history[history.length - 1];
    return(
        <div className="board">
            <div className="row g-0 row-cols-3">
                {squares.map((square,index) => {
                    return <Square handleOnClick = {() => handleSquareClick(index)} value={square} key={index}/>
                })}
            </div>
            
        </div>
    )
}

export default Board