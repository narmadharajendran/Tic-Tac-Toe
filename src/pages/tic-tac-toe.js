import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from "react";
import "./tic-tac-toe.styles.scss"
import Board from "../components/board/board";
import Moves from "../components/moves/moves";
import Util from "../util";

const TicTacToe = forwardRef((props, ref) =>{
    const { isSinglePlayer = true } = props
    const [history,setHistory ]= useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(false);
    const historyLength = history.length;
    const winnerRef = useRef(false);
    const drawRef = useRef(false);
    const tictactorRef = useRef();

    const doFindWinner = useCallback((squares, history) => {
        const result = Util.doFindWinner(squares);
        if(!result && history.length === 10){
            drawRef.current = true;
            setXIsNext(false);
        }
        else drawRef.current = false;
        winnerRef.current = result;
        setHistory(history);
    },[history, xIsNext]);
    
    const doComputerMove = useCallback((currentSquares, xIsNext, newHistory) =>{
        const selectedSquareRandomly = Util.randomIntFromInterval(0,8);
        if(currentSquares[selectedSquareRandomly]) {
            doComputerMove(currentSquares, xIsNext, newHistory);
        }
        else{
            const squaresToChange = [...currentSquares]
            !xIsNext ? squaresToChange[selectedSquareRandomly] = 'O' : squaresToChange[selectedSquareRandomly] = 'X';
            setXIsNext(prev => !prev);
            const history = [...newHistory,squaresToChange];
            setHistory([...history]);
            doFindWinner(squaresToChange, history);
        }
    },[history, doFindWinner]);

    const doComputerMoveForSinglePlayer = useCallback((currentSquares, xIsNext, newHistory)=>{
        if(isSinglePlayer && !winnerRef.current && !drawRef.current){
            setTimeout(() => {
                doComputerMove(currentSquares, xIsNext, newHistory)
            },500)
        }
    },[isSinglePlayer, doComputerMove, history]);

    const handleSquareClick = useCallback((index) =>{
        const newSquares = [...history[historyLength - 1]];
        if(newSquares[index] || winnerRef.current) return;
        xIsNext ? newSquares[index] = 'O' : newSquares[index] = 'X';
        setXIsNext(prev => !prev);
        const newHistory = [...history,newSquares];
        // setHistory(newHistory);
        doFindWinner(newSquares, newHistory);
        doComputerMoveForSinglePlayer(newSquares, xIsNext, newHistory);
    },[xIsNext,history,doFindWinner, doComputerMoveForSinglePlayer, historyLength]);

    const handleMove = useCallback((index) => {
        history.splice(index, historyLength > 1 ? historyLength - 1 : 1);
        const newHistory = [...history];
        setHistory(newHistory);  
        doFindWinner(history[history.length - 1], newHistory)
    },[history, historyLength, doFindWinner]);

    const restartGame = useCallback(() =>{
        history.splice(1, historyLength - 1);
        winnerRef.current = false;
        drawRef.current = false;
        setHistory([...history]);
        setXIsNext(false);

    },[history, historyLength, xIsNext]);

    useImperativeHandle(ref, () => ({
        restartGame
    }));

    const getGameStatus = useMemo(() =>{
        if(historyLength > 1 && winnerRef.current){
            if(xIsNext) return "Status: X is a winner"
            return "Status: O is a winner"
        }
        else if(historyLength > 1 && drawRef.current){
            return "Status: Draw!"
        }
        else if(isSinglePlayer) return "Move to next step"
        else if(!xIsNext || historyLength == 1) return "Player 1's Turn"
        else return "Player 2's Turn"
    },[historyLength, isSinglePlayer, xIsNext]);

    return(
        <div className="tic-tac-toe-container">
            <div className="tic-tac-toe-content">
                <h2 className="tic-tac-toe-result-text">{getGameStatus}</h2>
                <div className="tic-tac-toe-board-container">
                    <Board handleSquareClick={handleSquareClick} history={history}/>
                    {!isSinglePlayer && historyLength > 1 &&
                    <div className="board-history">
                        <Moves history={history} handleMove = {handleMove}/>
                    </div>}
                </div>
            </div>
        </div>
    )
});

export default TicTacToe;