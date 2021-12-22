import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type Dialog_itemPropsType = {
    name: string
    id: number
}

export const Dialog_item: React.FC<Dialog_itemPropsType> = (props) => {
    return (
         <div className={`${s.dialog} ${s.active}`}> {/*это в dialogs компонента с одним именем и его id*/}
             <NavLink to={"/dialogs/" + props.id}>  {/*Обернута в NavLink чтоб создавалась отдельная ссылка по клику на имя*/}
                {props.name}
            </NavLink>
        </div>
    )
}



