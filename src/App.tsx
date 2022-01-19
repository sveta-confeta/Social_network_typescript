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
import {ActionTypes, StoreType} from './redux/state';



export type AppPropsType={
    store: StoreType
    // addPost:(postMessage:string)=>void
    // onPostChange:(newText:string)=>void
    dispatch:(action:ActionTypes)=>void

}


const App:React.FC<AppPropsType> = (props) => {
    const state=props.store.getState();//передаем отрисовку state
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friendData={state.friendData}/>
                <div className="app-wrapper-content">
                    <Routes>
                         <Route path='/dialogs' element={<Dialogs messageData={state.dialogsPage.messageData} dialogsData={state.dialogsPage.dialogsData}/>}/>
                        <Route path='/dialogs/:id' element={<Dialogs messageData={state.dialogsPage.messageData} dialogsData={state.dialogsPage.dialogsData}/>}/>
                        <Route path='/profile' element={<Profile postData={state.profilePage.postData}
                                                                 // onPostChange={props.store.onPostChange.bind(props.store)}
                                                                 // addPost={props.store.addPost.bind(props.store)}
                                                                 dispatch={props.store.dispatch.bind(props.store)}
                                                                 newPostText={state.profilePage.newPostText}/>}/>
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
