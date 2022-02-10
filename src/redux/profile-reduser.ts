import {ActionTypes, AddPostActionType, OnPostChangeActionType, PostDataType, StateType} from "./state";

const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';

const profileReduser=(state:StateType,action:ActionTypes)=>{

    if (action.type === ADD_POST) {
        const newPost: PostDataType = {id: new Date().getTime(), message: action.postMessage, count: 0};
        state.profilePage.postData.push(newPost);
        state.profilePage.newPostText = " "

    } else if (action.type === ON_POST_CHANGE) {
        state.profilePage.newPostText = action.newText;

    }
    return state;
}
export const addPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: ADD_POST,
        postMessage: newPostText
    }
}
export const onPostChangeActionCreator = (text: string): OnPostChangeActionType => {
    return {
        type: ON_POST_CHANGE,
        newText: text
    }
}