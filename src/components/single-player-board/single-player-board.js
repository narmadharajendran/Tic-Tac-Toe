import { useRef } from "react"
import TicTacToe from "../../pages/tic-tac-toe"
import "./single-player-board.scss"
import Header from "../header/header";
import { useNavigate } from "react-router-dom";

const SinglePlayer = () =>{
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
            <Header headerText="Single Player Mode"/>
            <div className="page-content">
                <TicTacToe isSinglePlayer={true} ref={childRef}/>
                <div className="instruction-text">
                    <span>You: X</span>
                    <span>AI: O</span>
                </div>
                <div className="buttons-container">
                    <button className="ui-button" onClick={restartGame}>RESTART GAME</button>
                    <button className="ui-button" onClick={()=>navigateToHome()}>HOME</button>
                </div>
            </div>      
        </div>
    )
}

export default SinglePlayer