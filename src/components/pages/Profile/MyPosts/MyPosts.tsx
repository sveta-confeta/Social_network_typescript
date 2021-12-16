import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi, how are you?', count: 20},
        {id: 2, message: 'What are you doing on Saturday?', count: 25},
        {id: 3, message: 'I miss...', count: 30},

    ]
    return (
        <div className={s.posts_block}>
            My posts
            <div>
                <textarea></textarea>
                <button className={s.btn}>Add post</button>
            </div>
            <div className={s.posts}>
                <Post id={postData[0].id} message={postData[0].message} count={postData[0].count}/>
                <Post id={postData[1].id} message={postData[1].message} count={postData[1].count}/>
                <Post id={postData[2].id} message={postData[2].message} count={postData[2].count}/>


            </div>
        </div>
    )
}

export default MyPosts;
