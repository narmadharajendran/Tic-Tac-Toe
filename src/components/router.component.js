import {React} from "react";
// import { Navigate, Route, Routes } from "react-router";
import SinglePlayer from "./single-player-board/single-player-board";
import MultiplePlayer from "./multiple-player-board/multiple-player-board";
import Home from "./home/home";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

const RouterComponent = () =>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" replace />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Single-player" element={<SinglePlayer />} />
                <Route path="/Multi-player" element={<MultiplePlayer />} />
            </Routes>
        </HashRouter>
    )
}
export default RouterComponent