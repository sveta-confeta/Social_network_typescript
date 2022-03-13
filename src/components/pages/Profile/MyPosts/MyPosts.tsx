import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import { PostDataType} from "../../../../redux/state";
import {PostPropsType} from "./MyPostsConteiner";




const MyPosts = (props: PostPropsType) => {

    const onAddPost = () => {
        // props.addPost();
         props.addPost(props.newPostText);
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.onPostChange(text);



    }

    let postElements = props.postData.map(el => <Post id={el.id} message={el.message} count={el.count}/>)
    return (
        <div className={s.posts_block}>
            My posts
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
            </div>
            <button onClick={onAddPost}>AddPost</button>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
