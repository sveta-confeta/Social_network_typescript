import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Dialog_item} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {InitialStateType} from "../../../redux/gialogs-reduser";
import {AppStateType, DispatchType} from "../../../redux/redux-store";


type AppStore = AppStateType & DispatchType

export type DialogsPropsType = {
    // messageData: Array<MessageDataType>
     dialogsPage: InitialStateType
     //newMessageText: string
     clickHandler: () => void
     onChangeHandler: (value: string) => void
    store: any


}

export const Dialogs = (props: DialogsPropsType) => {    //компонента со всеми именами и сообщениями- где Dialog_item -это одно сообщение


    let dialogsElements = props.store.dialogsPage.map(el => {
        return (
            <Dialog_item id={el.id} name={el.name}/>
        )
    })

    let messageElements = props.store.messageData.map(el => <Message id={el.id} text={el.text}/>);
    let newMessageText = props.store.newMessageText;//пустую сторку через пропсы передаем сюда из данных, чтоб отрисовывать в текстареа что в нее приходит в эту строку

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let value = event.currentTarget.value; //получили значение textarea и теперь его надо отправить в bll
        props.onChangeHandler(value);
        // props.store.dispatch(updateActionCreator(value));

    }
    const clickHandler = () => {
// props.store.dispatch(sendMessageActionCreator());

        //props.newMessageText(); //не работает
    }

    //промапиваем данные, которые перебирались как обьекты по номерам ключей, и вместо них в ретурн вставляем переменные
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>   {/*name*/}
                {dialogsElements} {/*переменная*/}
            </div>
            <div className={s.messages}>     {/*message*/}
                {messageElements} {/*переменная*/}
            </div>

            <textarea placeholder={'add message'} value={newMessageText} onChange={onChangeHandler}/>
            <button onClick={clickHandler}>Отправить сообщение</button>


        </div>
    )
}