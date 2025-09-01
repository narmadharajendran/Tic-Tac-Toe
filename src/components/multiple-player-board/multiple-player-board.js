import { useRef } from "react";
import TicTacToe from "../../pages/tic-tac-toe";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";

const MultiplePlayer = () =>{
    const childRef = useRef();
    const navigate = useNavigate();
    const restartGame = () => {
        childRef.current.restartGame();
    };
    const navigateToHome = () => {
        navigate('/Home')
    }
    return(
        <div className="page-container">
            <Header headerText="MultiPlayer Mode"/>
            <div className="page-content">
                <TicTacToe isSinglePlayer={false} ref={childRef}/>
                <div className="instruction-text">
                    <span>Player 1(X)</span>
                    <span>Player 2(O)</span>
                </div>
                <div className="buttons-container">
                    <button className="ui-button" onClick={restartGame}>RESTART GAME</button>
                    <button className="ui-button" onClick={()=> navigateToHome()}>HOME</button>
                </div>
            </div>         
        </div>
    )
}

export default MultiplePlayer;