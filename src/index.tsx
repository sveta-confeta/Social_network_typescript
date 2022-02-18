import React from 'react';
import reportWebVitals from './reportWebVitals';
import { store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/state";
import {Provider} from "react-redux";


export let rerenderEntireTree = (state: StateType ) => {
    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
            <App
                // store ={store}
                //  state={state}
                //  // addPost={store.addPost} onPostChange={store.onPostChange}
                // dispatch={store.dispatch.bind(store)}
            />
            </Provider>

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
