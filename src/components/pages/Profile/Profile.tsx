import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {IndexPropsType} from "../../../index";


export type MypostsPropsType={
   postData: Array <IndexPropsType>
}


const Profile = (props:MypostsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}

export default Profile;
