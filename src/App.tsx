import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/pages/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Helping} from "./components/pages/Helping/Helping";
import {Music} from "./components/pages/Music/Music";
import {News} from "./components/pages/News/News";
import Profile from "./components/pages/Profile/Profile";
import {ActionTypes} from './redux/state';
import {AppStateType, StoreType} from "./redux/redux-store";



export type AppPropsType = {
    store: StoreType
    state:AppStateType
    // addPost:(postMessage:string)=>void
    // onPostChange:(newText:string)=>void
    dispatch: (actions: ActionTypes ) => void

}


const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friendData={props.state.friendData}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/dialogs' element={<Dialogs
                        store={props.store}
                        // messageData={state.dialogsPage.messageData}
                        // dialogsData={state.dialogsPage.dialogsData}
                        // newMessageText={state.dialogsPage.newMessageText}
                        // dispatch={props.dispatch}
                    />}/>
                    <Route path='/dialogs/:id' element={<Dialogs
                        // messageData={state.dialogsPage.messageData}
                        // newMessageText={state.dialogsPage.newMessageText}
                        // dialogsData={state.dialogsPage.dialogsData}
                        // dispatch={props.dispatch.bind(props.store)}
                        store={props.store}
                    />}/>
                    <Route path='/profile' element={<Profile store={props.store}
                                                             // postData={props.state.profilePage.postData}
                        // onPostChange={props.store.onPostChange.bind(props.store)}
                        // addPost={props.store.addPost.bind(props.store)}
                                                             dispatch={props.store.dispatch.bind(props.store)}
                                                             // newPostText={props.state.profilePage.newPostText}
                    />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/helping' element={<Helping/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
