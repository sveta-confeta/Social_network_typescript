import React from "react";
import {
    sendMessageActionCreator,
    updateActionCreator
} from "../../../redux/gialogs-reduser";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../../redux/state";


//export type DialogsPageType = {
    // messageData: Array<MessageDataType>
    // dialogsData: Array<DialogsDataType>
    // newMessageText: string
    // dispatch: (action: ActionTypes) => void
    // store: StoreType

//}

// export const DialogsConteiner = () => {    //компонента со всеми именами и сообщениями- где Dialog_item -это одно сообщение
//     return <StoreContext.Consumer>
//         {store => {
//
//             const onChangeHandler = (value: string) => {
//                 // let value = event.currentTarget.value; //получили значение textarea и теперь его надо отправить в bll
//                 store.dispatch(updateActionCreator(value));
//
//             }
//             const clickHandler = () => {
//                 store.dispatch(sendMessageActionCreator());
//
//             }
//             return (
//                 <Dialogs onChangeHandler={onChangeHandler} newMessageText={store.dialogsPage.newMessageText}
//                          clickHandler={clickHandler} dialogsData={store.dialogsPage.messageData}
//                          messageData={store.dialogsPage.messageData}/>
//
//             )
//
//
//         }}
//     </StoreContext.Consumer>

let stateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage   //cдесь сидят данные из стейта
    }
}
/////////
let dispatchToProps = (dispatch: any) => {
    return {
        onChangeHandler: (value: string) => {
            dispatch(updateActionCreator(value));
        },
        clickHandler: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

// а теперь компонента с помощью библиотеки реакт-редакс:
export const DialogsConteiner = connect(stateToProps, dispatchToProps)(Dialogs); //мы как бы диалог законектили к стору

//конект создает контейнерную компоненту, и диалог-презентационную. в перых скобках это пропсы для диалог


