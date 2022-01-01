import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {addPost, StateType,onPostChange} from "./redux/state";
// import {StateType} from "./redux/state";



// export type IndexType = {
//      State: StateType
//      addPost:(postMessage:string)=>void
// }

export let rerenderEntireTree=(State:StateType)=>{
ReactDOM.render(
  <React.StrictMode>
    <App State={State} addPost={addPost} onPostChange={onPostChange}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}


