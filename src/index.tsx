import React from 'react';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./render";
import {State} from "./redux/state";






 rerenderEntireTree(State)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
