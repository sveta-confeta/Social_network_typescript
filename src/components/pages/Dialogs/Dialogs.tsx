import React from "react";
import s from "./Dialogs.module.css"
import {Dialog_item} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsIndexPropsType, MessageIndexPropsType} from "../../../index";

export type DialogsPropsType= {
    messageData:Array<MessageIndexPropsType>
    dialogsData:Array<DialogsIndexPropsType>

}

export const Dialogs = (props: DialogsPropsType) => {    //компонента со всеми именами и сообщениями- где Dialog_item -это одно сообщение

    let gialogsElements = props.dialogsData.map(el => <Dialog_item id={el.id} name={el.name}/>);
    let messageElements= props.messageData.map(el=> <Message id={el.id} text={el.text}/>);
    //промапиваем данные, которые перебирались как обьекты по номерам ключей, и вместо них в ретурн вставляем переменные
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>   {/*name*/}
                {gialogsElements} {/*переменная*/}
            </div>
            <div className={s.messages}>     {/*message*/}
                {messageElements} {/*переменная*/}
            </div>


        </div>
    )
}