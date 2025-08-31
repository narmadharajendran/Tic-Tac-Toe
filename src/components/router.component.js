import {React} from "react";
import { Navigate, Route, Routes } from "react-router";
import SinglePlayer from "./single-player-board/single-player-board";
import MultiplePlayer from "./multiple-player-board/multiple-player-board";
import Home from "./home/home";

const RouterComponent = () =>{
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />} basename={process.env.PUBLIC_URL}/>
            <Route path="/Home" element={<Home />} exact/>
            <Route path="/Single-player" element={<SinglePlayer />} exact/>
            <Route path="/Multi-player" element={<MultiplePlayer />} exact/>
        </Routes>
    )
}
export default RouterComponent