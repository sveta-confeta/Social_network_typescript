import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} count={20} />
                <Post message={'What are you doing on Saturday?'} count={25}/>


            </div>
        </div>
    )
}

export default MyPosts;
