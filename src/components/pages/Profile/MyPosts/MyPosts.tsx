import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../../redux/state";



export type PostPropsType={
    postData:Array<PostDataType>
}

const MyPosts = (props:PostPropsType) => {
    let addPost=()=>{
        
    }

    let postElements = props.postData.map(el => <Post id={el.id} message={el.message} count={el.count}/>)
    return (
        <div className={s.posts_block}>
            My posts
            <div>
                <textarea></textarea>
            </div>
            <button onClick={addPost}>AddPost</button>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
