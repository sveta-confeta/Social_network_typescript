import React from 'react';
import reportWebVitals from './reportWebVitals';
import {AppStateType, store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";




export let rerenderEntireTree = (state: AppStateType ) => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>
            <App store ={store}
                 state={state}
                 // addPost={store.addPost} onPostChange={store.onPostChange}
                dispatch={store.dispatch.bind(store)}
            />

        </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById('root')

    );
}

rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state=store.getState();
    rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
