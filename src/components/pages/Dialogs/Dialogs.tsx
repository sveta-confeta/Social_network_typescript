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
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )

}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>   {/*name*/}
                <Dialog_item name={'Dimych'} id={1}/>
                <Dialog_item name={'Agafon'} id={2}/>
                <Dialog_item name={'Mitrofan'} id={3}/>
                <Dialog_item name={'Fedot'} id={4}/>
            </div>
            <div className={s.messages}>     {/*message*/}
                <Message text={'Hi!!!'}/>
                <Message text={'Have you done motorcycle repairs?'}/>
                <Message text={'We are flying to Odessa tomorrow!'}/>
            </div>


        </div>
    )
}