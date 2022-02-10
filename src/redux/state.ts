import {v1} from "uuid";
import {dialogsReduser} from "./gialogs-reduser";
import {profileReduser} from './profile-reduser';
import {friendsReduser} from './friends-reduser';

export type AddPostPropsType = {
    addPost: (postMessage: string) => void
}

export type OnChangePropsType = {
    onPostChange: (newText: string) => void
}

export type MessageDataType = {
    id: string
    text: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type PostDataType = {
    message: string
    count: number
    id: number
}
export type FriendDataType = {
    id: number
    name_friend: string
    img_friend: string
}

export type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messageData: Array<MessageDataType>
    newMessageText: string
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    friendData: Array<FriendDataType>

}

export type StoreType = {
    _State: StateType
    // addPost: (postMessage: string) => void
    // onPostChange: (newText: string) => void
    subscribe: (collback: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

export type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}

export type OnPostChangeActionType = {
    type: 'ON-POST-CHANGE'
    newText: string
}
export type ActionTypes =
    AddPostActionType | OnPostChangeActionType | SendMessageType | UpdateNewMessageTextType

export type SendMessageType = {
    type: 'SEND_MESSAGE'
}

export type UpdateNewMessageTextType = {
    type: 'UPDATE_NEW_MESSAGE_TEXT'
    text: string
}
export const store: StoreType = {
    _State: {
        profilePage: {
            postData: [{id: 1, message: 'Hi, how are you?', count: 20},
                {id: 2, message: 'What are you doing on Saturday?', count: 25},
                {id: 3, message: 'I miss...', count: 30}],
            newPostText: " ",
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Agafon'},
                {id: 3, name: 'Mitrofan'},
                {id: 4, name: 'Fedot'},
            ]
            ,
            messageData: [
                {id: v1(), text: "Нello,my friends"},
            ],
            newMessageText: ' ',
        },

        friendData: [
            {
                id: 1,
                name_friend: 'Diogen Motogonych',
                img_friend: 'https://i.pinimg.com/236x/b3/01/e6/b301e6ea3e8b0632c158010d38d21a60.jpg'
            },
            {
                id: 2,
                name_friend: 'Eldar Speed',
                img_friend: 'https://i.pinimg.com/236x/74/48/ba/7448ba2658e5bbfc4ed29a1460da922f.jpg'
            },
            {
                id: 3,
                name_friend: 'Masha NeVasha',
                img_friend: 'https://i.pinimg.com/236x/01/fb/3a/01fb3a6472c506046457517b2f2d9a4a--cafe-racer-girl-biker-chick.jpg'
            },
        ]

    },
    // addPost(postMessage: string) { //добавляем addPost в типизацию Store
    //     const newPost: PostDataType = {id: new Date().getTime(), message: postMessage, count: 0};
    //     this._State.profilePage.postData.push(newPost);
    //     this._State.profilePage.newPostText = " "
    //
    //     this._rerenderEntireTree();
    // },
    // onPostChange(newText: string) {
    //     this._State.profilePage.newPostText = newText;
    //     this._rerenderEntireTree();
    // },


    subscribe(collback: () => void) {
        this._rerenderEntireTree = collback;
    },
    _rerenderEntireTree() {
        console.log('state changed')
    },
    getState() {
        debugger
        return this._State;
    },
    dispatch(action) {
        this._State.profilePage=profileReduser(this._State.profilePage,action);//отдаем редьюсеру то что ему нужно
        this._State.dialogsPage=dialogsReduser(this._State.dialogsPage,action);//отдаем редьюсеру то что ему нужно
        this._State.friendData=friendsReduser(this._State.friendData,action);//отдаем редьюсеру то что ему нужно
     this._rerenderEntireTree();

    }

}



