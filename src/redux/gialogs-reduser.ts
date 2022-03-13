import {v1} from "uuid";
import {
    ActionTypes,
    DialogsDataType,
    MessageDataType,
    SendMessageType,
    StateType,
    UpdateNewMessageTextType
} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState={
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Agafon'},
        {id: 3, name: 'Mitrofan'},
        {id: 4, name: 'Fedot'},
    ] as Array<DialogsDataType>
    ,
    messageData: [
        {id: v1(), text: "Нello,my friends"},
    ]as Array<MessageDataType>,
    newMessageText: ' ',
};
export type InitialStateType=typeof initialState;

export const dialogsReducer = (state:InitialStateType=initialState, action: ActionTypes):InitialStateType => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT :
            let copyState = {...state, newMessageText:action.text};
            return copyState;
        case  SEND_MESSAGE :{
            let body = state.newMessageText;
            let copyState = {...state,
                newMessageText: ' ',
                messageData:[...state.messageData,{id: v1(), text:body}]};
            
            return  copyState;
        }


        default:
            return state;

    }
}

export const sendMessageActionCreator = (): SendMessageType => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateActionCreator = (text: string): UpdateNewMessageTextType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text
    }};
