import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import { PostDataType} from "../../../../redux/state";


export type PostPropsType = {
    postData: Array<PostDataType>
     addPost:(postMessage:string)=>void
    newPostText: string
    onPostChange: (newText: string) => void
    // dispatch: (action: ActionTypes) => void
}

const MyPosts = (props: PostPropsType) => {


    const onAddPost = () => {
        // props.addPost();
         props.addPost(props.newPostText);
        // let action = addPostActionCreator(props.newPostText);
        // props.dispatch(action);
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.onPostChange(text);

        // let action = onPostChangeActionCreator(text);
        // props.dispatch(action)

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
