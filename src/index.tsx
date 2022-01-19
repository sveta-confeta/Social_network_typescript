import React from 'react';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";




export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}
                 // addPost={store.addPost} onPostChange={store.onPostChange}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
