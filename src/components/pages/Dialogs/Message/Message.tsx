import React from "react";
import s from "./../Dialogs.module.css"


type MessagePropsType = {
    text: string
    id: number
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.text}</div>    //это в dialogs компонента с одним coобщением .
    )

}



