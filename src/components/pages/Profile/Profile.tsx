import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostDataType} from "../../../redux/state";
import {MyPostsConteiner} from "./MyPosts/MyPostsConteiner";
import {StoreType} from "../../../redux/redux-store";





export type PostPageType = {
    // postData: Array<PostDataType>
    //  addPost:(postMessage:string)=>void
    // newPostText:string
    //  onPostChange:(newText:string)=>void
    dispatch:(action:ActionTypes)=>void
    store: StoreType

}


const Profile = (props:PostPageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsConteiner  //теперь мы данными снабжаем не MyPosts, а его контейнер
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
