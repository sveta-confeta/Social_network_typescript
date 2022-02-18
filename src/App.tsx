import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Helping} from "./components/pages/Helping/Helping";
import {Music} from "./components/pages/Music/Music";
import {News} from "./components/pages/News/News";
import Profile from "./components/pages/Profile/Profile";
// import {ActionTypes} from './redux/state';
// import {AppStateType, StoreType} from "./redux/redux-store";
import {DialogsConteiner} from "./components/pages/Dialogs/DialogsConteiner";
import {StoreType} from "./redux/state";



 export type AppPropsType = {
//     store: StoreType
//     state:AppStateType
//     // addPost:(postMessage:string)=>void
//     // onPostChange:(newText:string)=>void
//     dispatch: (actions: ActionTypes ) => void
//
 }


const App =(props:AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friendData={store.friendData}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/dialogs' element={<DialogsConteiner
                        store={store}

                    />}/>
                    <Route path='/dialogs/:id' element={<DialogsConteiner

                        store={store}
                    />}/>
                    <Route path='/profile' element={<Profile store={store}
                                                             // postData={props.state.profilePage.postData}
                        // onPostChange={props.store.onPostChange.bind(props.store)}
                        // addPost={props.store.addPost.bind(props.store)}
                                                             dispatch={store.dispatch.bind(store)}
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
