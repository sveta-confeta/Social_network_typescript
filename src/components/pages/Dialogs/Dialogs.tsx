import React from "react";
import s from "./Dialogs.module.css"
import {Dialog_item} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessageDataType} from "../../../redux/state";


export type DialogsPageType = {
    messageData:Array<MessageDataType>
    dialogsData: Array<DialogsDataType>

}

export const Dialogs = (props: DialogsPageType) => {    //компонента со всеми именами и сообщениями- где Dialog_item -это одно сообщение

    let dialogsElements = props.dialogsData.map(el => <Dialog_item id={el.id} name={el.name}/>);
    let messageElements= props.messageData.map(el=> <Message id={el.id} text={el.text}/>);
    let changeTextarea=(event.)=>{

    }
    let clickHandler=()=>{

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
            <textarea value={newText} onChange={changeTextarea}></textarea>
            <button onClick={clickHandler}>Отправить сообщение</button>




        </div>
    )
}