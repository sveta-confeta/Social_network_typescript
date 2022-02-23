import React from "react";
import { onPostChangeActionCreator} from "../../../../redux/profile-reduser";
import {addPostActionCreator} from "../../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/state";


//export type PostPropsType={
    // postData:Array<PostDataType>
    //  addPost:(postMessage:string)=>void
    // newPostText:string
    //  onPostChange:(newText:string)=>void
    // dispatch:(action:ActionTypes)=>void
    //store: StoreType
//}
//контейнерная компонента задача которой удовлетворить нужды презентационной компоненты
// export const MyPostsConteiner = (props:PostPropsType) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store)=>{
//                 let state=props.store.getState() //предоставили стор
//
//                 const addPost=()=>{
//                     // props.addPost(props.newPostText);
//                     let action=addPostActionCreator(state.profilePage.newPostText);
//                     // let action=addPostActionCreator();
//                     props.store.dispatch(action);
//                 }
//
//                 let onPostChange=(text:string)=>{
//                     // props.onPostChange(e.currentTarget.value);
//                     //        let text = e.currentTarget.value;
//                     let action = onPostChangeActionCreator(text);
//                     props.store.dispatch(action)
//
//                 }
//                 return(
//                     <MyPosts  onPostChange={onPostChange} addPost={addPost}
//                               postData={store.getState().profilePage.postData}
//                               newPostText={store.getState().profilePage.newPostText}
//
//                     />
//                 )
//             }
//
//         }
//
//         </StoreContext.Consumer>
//     )
// }
let stateToProps=(state:StateType)=>{
    return{
        postData: state.profilePage.postData , //cдесь сидят данные из стейта
        newPostText:state.profilePage.newPostText,
    }
}
let dispatchToProps=(dispatch:any)=>{
    return{
        addPost:()=>{
            let action=addPostActionCreator(state.profilePage.newPostText);
            dispatch(action);
        },
        onPostChange:(text:string)=>{
        dispatch(onPostChangeActionCreator(text))
        }
    }
}

export const MyPostsContainer= connect (stateToProps,dispatchToProps)(MyPosts);


