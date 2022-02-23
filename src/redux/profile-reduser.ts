import {ActionTypes, AddPostActionType, OnPostChangeActionType, PostDataType} from "./state";

const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';

type InitialProfileType = typeof initialState

let initialState = {     //переносим сюда данные для профайла,которые лежали в profilePage
    postData: [{id: 1, message: 'Hi, how are you?', count: 20},
        {id: 2, message: 'What are you doing on Saturday?', count: 25},
        {id: 3, message: 'I miss...', count: 30}] as Array<PostDataType>,
    newPostText: " ",
}

export const profileReducer = (state = initialState, action: ActionTypes): InitialProfileType => { //изначально в редаксе,в стейте  нет данных -поэтому мы обьявляем initiall state
    switch (action.type) {                                                                                 //если данные не придут в стейт,тогда он будет отображать initialState
        case ADD_POST : {
            const newPost: PostDataType = {id: new Date().getTime(), message: action.postMessage, count: 0};
            let copyState = {...state};
            copyState.postData = [...state.postData]
            copyState.postData.push(newPost);
            copyState.newPostText = " ";
            return copyState;
        }
        case ON_POST_CHANGE :{
            let copyState={...state}
            copyState.newPostText = action.newText;
            return copyState
        }
        default:
            return state;

    }
};


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