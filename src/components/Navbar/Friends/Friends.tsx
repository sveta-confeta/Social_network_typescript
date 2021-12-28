import React from "react";
import s from './Friends.module.css';
import {Friend, FriendPropsType} from "./Friend/Friend";
export type FriendsType={
friendData: Array<FriendPropsType>
}

export const Friends:React. FC<FriendsType> = (props) => {
    let friendElement=props.friendData.map(el => <li><Friend id={el.id} name_friend={el.name_friend} img_friend={el.img_friend}/></li> )
    return (
        <div className={s.friends_wrapper}>
            <div className={s.friends}>Friends</div>
             <ul>
                 {friendElement}
             </ul>
        </div>
    )
}