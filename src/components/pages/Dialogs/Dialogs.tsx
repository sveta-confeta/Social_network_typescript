import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type Dialog_itemPropsType = {
    name: string
    id: number
}

const Dialog_item: React.FC<Dialog_itemPropsType> = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}><NavLink to={"/dialogs/" + props.id}>
            {props.name}
        </NavLink></div>
    )
}
type MessagePropsType = {
    text: string
    id:number
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )

}


export const Dialogs = () => {
    let dialogsData=[
        { id:1, name:'Dimych'},
        { id:2, name:'Agafon'},
        { id:3, name:'Mitrofan'},
        { id:4, name:'Fedot'},
    ]
    let messageData=[
        { id:1, text:'Hi!!!'},
        { id:2, text:'Have you done motorcycle repairs?'},
        { id:3, text:'We are flying to Odessa tomorrow!'},

    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>   {/*name*/}
                <Dialog_item id={dialogsData[0].id} name={dialogsData[0].name}/>
                <Dialog_item id={dialogsData[1].id} name={dialogsData[1].name}/>
                <Dialog_item id={dialogsData[2].id} name={dialogsData[2].name}/>
                <Dialog_item id={dialogsData[3].id} name={dialogsData[3].name}/>
            </div>
            <div className={s.messages}>     {/*message*/}
                <Message  id={messageData[0].id} text={messageData[0].text}/>
                <Message  id={messageData[1].id} text={messageData[1].text}/>
                <Message  id={messageData[2].id} text={messageData[2].text}/>
            </div>


        </div>
    )
}