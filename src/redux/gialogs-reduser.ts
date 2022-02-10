import {v1} from "uuid";
import {ActionTypes, SendMessageType, StateType, UpdateNewMessageTextType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const dialogsReduser = (state: StateType, action: ActionTypes) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) { //создали пустую строку,в которой будет текст из текстареа появляться
        state.dialogsPage.newMessageText = action.text

    } else if (action.type === SEND_MESSAGE) {
        let body = state.dialogsPage.newMessageText;
        state.dialogsPage.messageData.push({id: v1(), text: body}); //добавили в обьект с данными новый обьект с ноавой id и с тем что пришло из текстареа

    }

    return state;
}
export const sendMessageActionCreator = (): SendMessageType => {
    return {
        type: SEND_MESSAGE,
    }
};
export const updateActionCreator = (text: string): UpdateNewMessageTextType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text
    }
}