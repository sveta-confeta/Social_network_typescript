import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostDataType} from "../../../redux/state";




export type PostPageType = {
    postData: Array<PostDataType>
    addPost:(postMessage:string)=>void
    newPostText:string
    onPostChange:(newText:string)=>void
}


const Profile = (props:PostPageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData} addPost={props.addPost} newPostText={props.newPostText} onPostChange={props.onPostChange}/>
        </div>
    )
}

export default Profile;
