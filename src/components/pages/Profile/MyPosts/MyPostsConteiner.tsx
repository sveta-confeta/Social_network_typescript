import React from "react";
import { onPostChangeActionCreator} from "../../../../redux/profile-reduser";
import {addPostActionCreator} from "../../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionTypes, PostDataType, StateType} from "../../../../redux/state";


export type PostPropsType= MapDispatchToPropsType & MapStateToPropsType & {store: any}

type MapStateToPropsType = {
    postData:Array<PostDataType>
    newPostText:string
}

type MapDispatchToPropsType = {
    addPost:(postMessage:string)=>void
    onPostChange:(newText:string)=>void
}

let stateToProps=(state:StateType):MapStateToPropsType=>{
    return{
        postData: state.profilePage.postData , //cдесь сидят данные из стейта
        newPostText:state.profilePage.newPostText,
    }
}
let dispatchToProps=(dispatch:any):MapDispatchToPropsType=>{
    return{
        addPost:(text:string)=>{
            let action=addPostActionCreator(text);
            dispatch(action);
        },
        onPostChange:(text:string)=>{
        dispatch(onPostChangeActionCreator(text))
        }
    }
}

export const MyPostsContainer= connect (stateToProps,dispatchToProps)(MyPosts);


