import React from "react"
import "./home.styles.scss"
import { useNavigate } from "react-router-dom";
import TicTacToe from "../../assets/tic-tac-toe.png";

const Home = (props) =>{
    const navigate = useNavigate();
    return(
        <div className="home-container">
            <h1>TIC TAC TOE</h1>
            <img src={TicTacToe} alt="Tic Tac Toe Icon" style={{ width: '100px', height: '100px' }}/>
            <p>A simple fun game for everyone!</p>
            <button className="ui-button" onClick={() => navigate('/Single-player')}>SINGLE PLAYER</button>
            <button className="ui-button" onClick={()=> navigate('/Multi-player')}>MULTI PLAYER</button>
        </div>
    )
}

export default Home