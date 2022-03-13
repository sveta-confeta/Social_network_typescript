import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostDataType} from "../../../redux/state";
import {StoreType} from "../../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsConteiner";





export type PostPageType = {
    // postData: Array<PostDataType>
    //  addPost:(postMessage:string)=>void
    // newPostText:string
    //  onPostChange:(newText:string)=>void
    dispatch:(action:ActionTypes)=>void
    store: any

}


const Profile = (props:PostPageType) => {

    return (
        <div>
            <ProfileInfo/>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <MyPostsContainer  //теперь мы данными снабжаем не MyPosts, а его контейнер
                store={props.store}
                // postData={props.postData}
                //      dispatch={props.dispatch}
                //       addPost={props.addPost}
                //      newPostText={props.newPostText}
                //       onPostChange={props.onPostChange}
            />
        </div>
    )
}

export default Profile;
