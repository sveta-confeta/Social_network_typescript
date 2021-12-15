import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img className={s.main_img} src="https://pbs.twimg.com/profile_banners/2862249501/1415359067/1500x500"
                 width="1000" height="250"/>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
