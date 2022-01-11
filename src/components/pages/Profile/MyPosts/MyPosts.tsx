import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../../redux/state";





export type PostPropsType={
    postData:Array<PostDataType>
    addPost:(postMessage:string)=>void
    newPostText:string
    onPostChange:(newText:string)=>void
}

const MyPosts = (props:PostPropsType) => {

    const addPost=()=>{

            props.addPost(props.newPostText);
        }

        let onPostChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
     props.onPostChange(e.currentTarget.value);

    }

    let postElements = props.postData.map(el => <Post id={el.id} message={el.message} count={el.count}/>)
    return (
        <div className={s.posts_block}>
            My posts
            <div>
                <textarea  onChange={onPostChange} value={props.newPostText}></textarea>
            </div>
            <button onClick={addPost}>AddPost</button>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
