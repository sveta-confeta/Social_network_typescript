import {v1} from "uuid";

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

const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';


export const addPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: ADD_POST,
        postMessage: newPostText
    }
}
export const onPostChangeActionCreator = (text: string): OnPostChangeActionType => {
    return {
        type: ON_POST_CHANGE,
        newText: text
    }
}


export const sendMessageActionCreator = (): SendMessageType => {
    return {
        type: SEND_MESSAGE,
    }
};
export const updateActionCreator = (text: string): UpdateNewMessageTextType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text
    }
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
        if (action.type === ADD_POST) {
            const newPost: PostDataType = {id: new Date().getTime(), message: action.postMessage, count: 0};
            this._State.profilePage.postData.push(newPost);
            this._State.profilePage.newPostText = " "
            this._rerenderEntireTree();
        } else if (action.type === ON_POST_CHANGE) {
            this._State.profilePage.newPostText = action.newText;
            this._rerenderEntireTree();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) { //создали пустую строку,в которой будет текст из текстареа появляться
            this._State.dialogsPage.newMessageText = action.text
            this._rerenderEntireTree();
        } else if (action.type === SEND_MESSAGE) {
            let body = this._State.dialogsPage.newMessageText;
            this._State.dialogsPage.messageData.push({id: v1(), text: body}); //добавили в обьект с данными новый обьект с ноавой id и с тем что пришло из текстареа
            this._rerenderEntireTree();
        }
    }

}



