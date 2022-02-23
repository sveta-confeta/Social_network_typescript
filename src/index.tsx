import React from 'react';
import reportWebVitals from './reportWebVitals';
import { store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



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



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
