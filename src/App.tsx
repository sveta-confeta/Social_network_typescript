import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/pages/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Helping} from "./components/pages/Helping/Helping";
import {Music} from "./components/pages/Music/Music";
import {News} from "./components/pages/News/News";
import Profile from "./components/pages/Profile/Profile";
import {StateType} from './redux/state';



export type AppPropsType={
    State:StateType
    addPost:(postMessage:string)=>void
    onPostChange:(newText:string)=>void

}


const App:React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friendData={props.State.friendData}/>
                <div className="app-wrapper-content">
                    <Routes>
                         <Route path='/dialogs' element={<Dialogs messageData={props.State.dialogsPage.messageData} dialogsData={props.State.dialogsPage.dialogsData}/>}/>
                        <Route path='/dialogs/:id' element={<Dialogs messageData={props.State.dialogsPage.messageData} dialogsData={props.State.dialogsPage.dialogsData}/>}/>
                        <Route path='/profile' element={<Profile postData={props.State.profilePage.postData} onPostChange={props.onPostChange}   addPost={props.addPost} newPostText={props.State.profilePage.newPostText}/>}/>
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
