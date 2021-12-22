import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

import {IndexPropsType} from "../../../../index";

export type PostPropsType={
    postData:Array<IndexPropsType>
}

const MyPosts = (props: PostPropsType) => {

    let postElements = props.postData.map(el => <Post id={el.id} message={el.message} count={el.count}/>)
    return (
        <div className={s.posts_block}>
            My posts
            <div>
                <textarea></textarea>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
