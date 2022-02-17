import React from "react";
import {
    sendMessageActionCreator,
    updateActionCreator
} from "../../../redux/gialogs-reduser";
import {StoreType} from "../../../redux/redux-store";
import {Dialogs} from "./Dialogs";



export type DialogsPageType = {
    // messageData: Array<MessageDataType>
    // dialogsData: Array<DialogsDataType>
    // newMessageText: string
    // dispatch: (action: ActionTypes) => void
    store: StoreType

}

export const DialogsConteiner = (props: DialogsPageType) => {    //компонента со всеми именами и сообщениями- где Dialog_item -это одно сообщение

    let state=props.store.getState().dialogsPage;


    const onChangeHandler = (value:string) => {
        // let value = event.currentTarget.value; //получили значение textarea и теперь его надо отправить в bll
         props.store.dispatch(updateActionCreator(value));

    }
    const clickHandler = () => {
props.store.dispatch(sendMessageActionCreator());

    }

    //промапиваем данные, которые перебирались как обьекты по номерам ключей, и вместо них в ретурн вставляем переменные
    return (

      <Dialogs  onChangeHandler={onChangeHandler} clickHandler={clickHandler} dialogsPage={state}/>
    )
}