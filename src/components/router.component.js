import {React} from "react";
import SinglePlayer from "./single-player-board/single-player-board";
import MultiplePlayer from "./multiple-player-board/multiple-player-board";
import Home from "./home/home";
import { Routes, Route, Navigate } from "react-router-dom";

const RouterComponent = () =>{
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/Home" element={<div>Home</div>} />
            <Route path="/Single-player" element={<SinglePlayer />} />
            <Route path="/Multi-player" element={<MultiplePlayer />} />
        </Routes>
    )
}
export default RouterComponent