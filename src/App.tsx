import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/pages/Profile/Profile";
import {Dialogs} from "./components/pages/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Helping} from "./components/pages/Helping/Helping";
import {Music} from "./components/pages/Music/Music";
import {News} from "./components/pages/News/News";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/helping' element={<Helping/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
