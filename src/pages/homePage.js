import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Board from './Board.js'
import About from './About.js'
import '../App.css'


function homePage() {
    return (
        <>
            <h1 className="header">Hello, Williroy</h1>
            <BrowserRouter>
                <nav className="App">
                    <NavLink to="Board">
                        <button className="index-button" >게시판 화면으로</button>
                    </NavLink>
                    <NavLink to="About">
                        <button className="index-button">About 화면으로</button>
                    </NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<homePage />} />
                    <Route path="Board" element={<Board />} />
                    <Route path="About" element={<About />} />

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default homePage;