import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import {Dialogs} from "./components/pages/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Helping} from "./components/pages/Helping/Helping";
import {Music} from "./components/pages/Music/Music";
import {News} from "./components/pages/News/News";
import Profile from "./components/pages/Profile/Profile";
import {DialogsIndexPropsType, IndexPropsType, MessageIndexPropsType} from "./index";


export type AppPropsType= {
    postData:Array<IndexPropsType>
    messageData:Array<MessageIndexPropsType>
    dialogsData:Array<DialogsIndexPropsType>

}


const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                         <Route path='/dialogs' element={<Dialogs messageData={props.messageData} dialogsData={props.dialogsData}/>}/>
                        <Route path='/dialogs/:id' element={<Dialogs messageData={props.messageData} dialogsData={props.dialogsData}/>}/>
                        <Route path='/profile' element={<Profile postData={props.postData}/>}/>
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
