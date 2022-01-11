import React from 'react';
import reportWebVitals from './reportWebVitals';
import {addPost, onPostChange, State, StateType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import {subscribe} from "./redux/state";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App State={State} addPost={addPost} onPostChange={onPostChange}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
