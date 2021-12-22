import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

export type IndexPropsType={
    message:string
    count:number
    id:number
}
export type DialogsIndexPropsType={
    id:number
    name:string
}
export type MessageIndexPropsType={
    id:number
    text:string
}

let postData: Array<IndexPropsType> = [
    {id: 1, message: 'Hi, how are you?', count: 20},
    {id: 2, message: 'What are you doing on Saturday?', count: 25},
    {id: 3, message: 'I miss...', count: 30},

]
let dialogsData: Array<DialogsIndexPropsType> = [                    //а Message -это одно сообщение
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Agafon'},
    {id: 3, name: 'Mitrofan'},
    {id: 4, name: 'Fedot'},
]

let messageData: Array<MessageIndexPropsType> = [
    {id: 1, text: 'Hi!!!'},
    {id: 2, text: 'Have you done motorcycle repairs?'},
    {id: 3, text: 'We are flying to Odessa tomorrow!'},

]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messageData={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
