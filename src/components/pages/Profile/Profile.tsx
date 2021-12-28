import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../../redux/state";



export type PostPageType = {
    postData: Array<PostDataType>

}


const Profile = (props:PostPageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}

export default Profile;
